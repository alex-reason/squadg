import * as z from 'zod';

export const UserValidation = z.object({
    username: z.string().min(5).max(10),
    bio: z.string().min(3).max(100)
})