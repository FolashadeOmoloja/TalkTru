import * as z from 'zod'

//this is a schema
export const UserValidation = z.object({
    profile_photo: z.string().url().min(1, 'Provide a profile picture'),
    name: z.string().min(3, 'Not long enough ;)').max(30, "It's too longg :("),
    username: z.string().min(3, 'Not long enough ;)').max(30, "It's too longg :("),
    bio: z.string().min(3, 'Not long enough ;)').max(300, "You've reached the limit ;)")
})