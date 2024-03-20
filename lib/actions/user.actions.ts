"use server"
import { revalidatePath } from "next/cache";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";
import { cardioPoints, fullBodyPoints, toningPoints } from "@/public/assets/data";

// update user
interface UserActionUpdateParams {
    userId: string,
    bio: string,
    path: string
    username: string,
    dateJoined: number,
    avatar: string
};

export async function updateUser({
    userId,
    bio,
    path,
    username,
    dateJoined,
    avatar
}: UserActionUpdateParams): Promise<void> {
    try {
        connectToDB();
        await User.findOneAndUpdate(
            { id: userId },
            {
                username: username.toLowerCase(),
                bio,
                onboarded: true,
                dateJoined,
                avatar
            },
            { upsert: true }
        );

        if (path === '/profile/edit') {
            revalidatePath(path)
        }
    } catch (error: any) {
        console.log(`Failed to create/update user: ${error.message}`);
    }
};

// fetch user
export async function fetchUser(userId: string) {
    try {
        connectToDB()
        return await User.findOne({ id: userId })
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    }
};

// fetch ALL users
export async function fetchAllUsers() {
    try {
        connectToDB();
        const usersQuery = User.find()
            .sort({ username: "asc" })
        const users = await usersQuery.exec();

        return { users };
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

// fetch ALL users
export async function fetchTopUsers() {
    try {
        connectToDB();
        const usersQuery = User.find()
            .sort({ totalPoints: -1 })
            .limit(10)
        const users = await usersQuery.exec();

        return { users };
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

// update workout
interface workoutUpdateParams {
    userId: string,
    workouts: {
        cardio: {
            runMinutes: number,
            walkSteps: number,
            cardioExercise: number,
        },
        fullbody: {
            sportsMinutes: number,
            yogaMinutes: number,
            pilatesMinutes: number,
            cyclingMinutes: number,
        },
        toning: {
            lowerReps: number,
            upperReps: number,
            coreReps: number,
        }
    },
    userLevel: number
};

export async function updateUserWorkout({
    userId,
    workouts,
}: workoutUpdateParams): Promise<void> {
    try {
        connectToDB();
        // calculate points
        const { runMinutes, walkSteps, cardioExercise } = workouts.cardio;
        const { sportsMinutes, yogaMinutes, pilatesMinutes, cyclingMinutes } = workouts.fullbody;
        const { lowerReps, upperReps, coreReps } = workouts.toning;
        const workoutPoints = (runMinutes * cardioPoints.running) + ((walkSteps / 1000) * cardioPoints.walking) + (cardioExercise * cardioPoints.cardio) + (sportsMinutes * fullBodyPoints.sports) + (yogaMinutes * fullBodyPoints.yoga) + (pilatesMinutes * fullBodyPoints.pilates) + (cyclingMinutes * fullBodyPoints.cycling) + (lowerReps * toningPoints.lowerbody) + (upperReps * toningPoints.upperbody) + (coreReps * toningPoints.core) || 0;

        //calculate level
        const updatedLevel = Math.round(workoutPoints / 250);

        await User.findOneAndUpdate(
            { id: userId },
            {
                workouts,
                totalPoints: workoutPoints,
                level: updatedLevel || 0
            },
            { upsert: true }

        );
        revalidatePath(`/profile/${userId}`)
    } catch (error: any) {
        console.log(`Failed to update user workout: ${error.message}`);
    }
};

export async function deletedUser(userId: string) {
    try {
        connectToDB()
        const deletedUser = await User.findOneAndDelete({
            id: userId
        });

        if (!deletedUser) {
            throw new Error("User not found");
        }

        return deletedUser;
    } catch (error) {
        console.error("Error deleting user: ", error);
        throw error;
    }
};