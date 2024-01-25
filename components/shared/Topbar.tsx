"use client"
import Link from "next/link"
import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Topbar = () => {
    const { userId } = useAuth();
    const router = useRouter();
    const navLinkClass = "cursor-pointer mx-2 text-link";
    return (
        <nav className="top-bottom-bars justify-end px-4 py-2 border-b-2 border-black-3 shadow-1  fixed top-0 right-0 z-20">
            <Link href="/" className="uppercase mx-2 text-base font-black text-primary-3" >Squad Gains</Link>
            <SignedIn>
                <Link href={`/profile/${userId}`} className={navLinkClass}>Profile</Link>
                <Link href="/workout" className={navLinkClass}>Add Workout</Link>
                <Link href="/friends" className={navLinkClass}>Friends</Link>
                <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                    <p className={navLinkClass}>Logout</p>
                </SignOutButton>
            </SignedIn>

            {!userId && <Link href="/sign-in" className={navLinkClass} >Login</Link>}

        </nav>
    )
};

export default Topbar;