// import { Webhook, WebhookRequiredHeaders } from "svix";
// import { headers } from "next/headers";
// import { IncomingHttpHeaders } from "http";
// import { WebhookEvent } from '@clerk/nextjs/server'
// import { NextResponse } from "next/server";
// import { deletedUser } from "@/lib/actions/user.actions";

// type EventType = "user.deleted" | "user.created";

// type Event = {
//     data: Record<string, string | number | Record<string, string>[]>;
//     object: "event";
//     type: EventType;
// };

// export const POST = async (request: Request) => {
//     const payload = await request.json();
//     const header = headers();

//     const heads = {
//         "svix-id": header.get("svix-id"),
//         "svix-timestamp": header.get("svix-timestamp"),
//         "svix-signature": header.get("svix-signature"),
//     };

//     // Activitate Webhook in the Clerk Dashboard.
//     // After adding the endpoint, you'll see the secret on the right side.
//     const wh = new Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");

//     let evnt: Event | null = null;

//     try {
//         evnt = wh.verify(
//             JSON.stringify(payload),
//             heads as IncomingHttpHeaders & WebhookRequiredHeaders
//         ) as Event;
//     } catch (err) {
//         return NextResponse.json({ message: err }, { status: 400 });
//     }

//     const eventType: EventType = evnt?.type!;


//     if (eventType === "user.created") {
//         try {
//             // Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/DeleteOrganization
//             // Show what evnt?.data sends from above resource
//             const { id } = evnt?.data;
//             console.log("user created", evnt?.data);

//             return NextResponse.json(
//                 { message: "User created" },
//                 { status: 201 }
//             );
//         } catch (err) {
//             console.log(err);

//             return NextResponse.json(
//                 { message: "Internal Server Error" },
//                 { status: 500 }
//             );
//         }
//     }

//     if (eventType === "user.deleted") {
//         try {
//             // Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/DeleteOrganization
//             // Show what evnt?.data sends from above resource
//             const { id } = evnt?.data;
//             console.log("deleted", evnt?.data);

//             // @ts-ignore
//             await deletedUser(id);

//             return NextResponse.json(
//                 { message: "User deleted" },
//                 { status: 201 }
//             );
//         } catch (err) {
//             console.log(err);

//             return NextResponse.json(
//                 { message: "Internal Server Error" },
//                 { status: 500 }
//             );
//         }
//     }
// };

import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { deletedUser } from '@/lib/actions/user.actions'

export async function POST(req: Request) {

    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    // Get the ID and type
    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.deleted") {
        try {
            // @ts-ignore
            await deletedUser(id);
        } catch (err) {
            console.log(err);
        }
    }
    return new Response('', { status: 200 })
}