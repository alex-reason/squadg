import { Webhook, WebhookRequiredHeaders } from "svix";
import { headers } from "next/headers";
import { IncomingHttpHeaders } from "http";

import { NextResponse } from "next/server";
import { deletedUser } from "@/lib/actions/user.actions";

type EventType = "user.deleted" | "user.created";

type Event = {
    data: Record<string, string | number | Record<string, string>[]>;
    object: "event";
    type: EventType;
};

export const POST = async (request: Request) => {
    const payload = await request.json();
    const header = headers();

    const heads = {
        "svix-id": header.get("svix-id"),
        "svix-timestamp": header.get("svix-timestamp"),
        "svix-signature": header.get("svix-signature"),
    };

    // Activitate Webhook in the Clerk Dashboard.
    // After adding the endpoint, you'll see the secret on the right side.
    const wh = new Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");

    let evnt: Event | null = null;

    try {
        evnt = wh.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
        ) as Event;
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 400 });
    }

    const eventType: EventType = evnt?.type!;

    
    if (eventType === "user.created") {
        try {
            // Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/DeleteOrganization
            // Show what evnt?.data sends from above resource
            const { id } = evnt?.data;
            console.log("user created", evnt?.data);

            return NextResponse.json(
                { message: "User created" },
                { status: 201 }
            );
        } catch (err) {
            console.log(err);

            return NextResponse.json(
                { message: "Internal Server Error" },
                { status: 500 }
            );
        }
    }

    if (eventType === "user.deleted") {
        try {
            // Resource: https://clerk.com/docs/reference/backend-api/tag/Organizations#operation/DeleteOrganization
            // Show what evnt?.data sends from above resource
            const { id } = evnt?.data;
            console.log("deleted", evnt?.data);

            // @ts-ignore
            await deletedUser(id);

            return NextResponse.json(
                { message: "User deleted" },
                { status: 201 }
            );
        } catch (err) {
            console.log(err);

            return NextResponse.json(
                { message: "Internal Server Error" },
                { status: 500 }
            );
        }
    }
};