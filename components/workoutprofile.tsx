"use client";
import { useState } from "react"
import WorkoutTabs from "@/components/workouttabs";
import UserInfoContainer from "./ui/userinfocontainer";

interface WorkoutInfoProps {
    workoutInfo: {
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
    }
};
const WorkoutProfile = ({ workoutInfo }: WorkoutInfoProps) => {
    const [category, setCategory] = useState<'cardio' | 'fullbody' | 'toning'>('cardio');

    return (
        <>
            <WorkoutTabs category={category} setCategory={setCategory} optionalClassName="mt-5 sm:mt-10" />
            <div className="centered-section profile-container p-8">
                {category === 'cardio' &&
                    <div>
                        <UserInfoContainer
                            title='Running'
                            info={workoutInfo?.cardio?.runMinutes ? `${workoutInfo?.cardio?.runMinutes} mins` : '0'}
                        />
                        <UserInfoContainer
                            title='Walking'
                            info={workoutInfo?.cardio?.walkSteps ? `${workoutInfo?.cardio?.walkSteps} steps` : '0'}
                        />
                        <UserInfoContainer
                            title='Cardio Workout'
                            info={workoutInfo?.cardio?.cardioExercise ? `${workoutInfo?.cardio?.cardioExercise} mins` : '0'}
                        />
                    </div>
                }
                {category === 'fullbody' &&
                    <div>
                        <UserInfoContainer
                            title='Sports'
                            info={workoutInfo?.fullbody?.sportsMinutes ? `${workoutInfo?.fullbody?.sportsMinutes} mins` : '0'}
                        />
                        <UserInfoContainer
                            title='yoga'
                            info={workoutInfo?.fullbody?.yogaMinutes ? `${workoutInfo?.fullbody?.yogaMinutes} mins` : '0'}
                        />
                        <UserInfoContainer
                            title='pilates'
                            info={workoutInfo?.fullbody?.pilatesMinutes ? `${workoutInfo?.fullbody?.pilatesMinutes} mins` : '0'}
                        />
                        <UserInfoContainer
                            title='cycling'
                            info={workoutInfo?.fullbody?.cyclingMinutes ? `${workoutInfo?.fullbody?.cyclingMinutes} mins` : '0'}
                        />
                    </div>
                }

                {category === 'toning' &&
                    <div>
                        <UserInfoContainer
                            title='Sports'
                            info={workoutInfo?.toning?.upperReps ? `${workoutInfo?.toning?.upperReps} reps` : '0'}
                        />
                        <UserInfoContainer
                            title='yoga'
                            info={workoutInfo?.toning?.lowerReps ? `${workoutInfo?.toning?.lowerReps} reps` : '0'}
                        />
                        <UserInfoContainer
                            title='pilates'
                            info={workoutInfo?.toning?.coreReps ? `${workoutInfo?.toning?.coreReps} reps` : '0'}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default WorkoutProfile;