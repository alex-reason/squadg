import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    bio: String,
    workouts: {
        cardio: {
            runMinutes: { type: Number },
            walkSteps: { type: Number },
            cardioExercise: { type: Number },
        },
        fullbody: {
            sportsMinutes: { type: Number },
            yogaMinutes: { type: Number },
            pilatesMinutes: { type: Number },
            cyclingMinutes: { type: Number },
        },
        toning: {
            lowerReps: { type: Number },
            upperReps: { type: Number },
            coreReps: { type: Number },
        }
    },
    totalPoints: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    onboarded: {
        type: Boolean,
        default: false,
    },
    dateJoined: {
        type: Number
    },
    avatar: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/fitness-tracker-ffa4d.appspot.com/o/Default.png?alt=media&token=fcb50ad6-dbd4-4856-9e7c-d97c3c8f456e'
    },
    status: {
        type: Boolean,
        default: false
    }
});

const User = mongoose?.models?.User || mongoose.model("User", userSchema);

export default User;