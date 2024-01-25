import * as z from 'zod';

export const WorkoutValidation = z.object({
    runMinutes: z.coerce.number().nonnegative(),
    walkSteps: z.coerce.number().nonnegative(),
    cardioExercise: z.coerce.number().nonnegative(),
    sportsMinutes: z.coerce.number().nonnegative(),
    yogaMinutes: z.coerce.number().nonnegative(),
    pilatesMinutes: z.coerce.number().nonnegative(),
    cyclingMinutes: z.coerce.number().nonnegative(),
    lowerReps: z.coerce.number().nonnegative(),
    upperReps: z.coerce.number().nonnegative(),
    coreReps: z.coerce.number().nonnegative(),
})