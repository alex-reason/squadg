"use client"
import Link from "next/link"
import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { PiSignOutBold } from "react-icons/pi";
import { IoTrophyOutline, IoAddCircleOutline, IoPeopleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Topbar = () => {
    const { userId } = useAuth();
    const router = useRouter();
    const navLinkClass = "cursor-pointer mx-2 text-link hidden sm:block";
    const smallNavLinkClass = "cursor-pointer mx-2 sm:mx-4 text-black-3 hover:translate-y-[-.5px] text-[1.2rem] hover:drop-shadow-sm block";

    return (
        <nav className="top-bottom-bars w-[100%] justify-end px-4 py-2 shadow-1 fixed top-0 right-0 z-20 min-h-[4rem] sm:h-auto">
            <Link href="/" className="uppercase mr-auto font-bold text-[1rem] text-primary-3 hover:translate-y-[-.5px] hover:drop-shadow-sm">
                Squad Gains
            </Link>
            <SignedIn>
                <Link href={`/profile/${userId}`} className="flex">
                    <p className={navLinkClass}>Profile</p>
                    <CgProfile className={`${smallNavLinkClass} sm:hidden`} />
                </Link>
                <Link href="/workout" >
                    <p className={navLinkClass}>Add Workout</p>
                    <IoAddCircleOutline className={`${smallNavLinkClass} sm:hidden`} />
                </Link>
                <Link href="/friends">
                    <p className={navLinkClass}>Friends</p>
                    <IoPeopleOutline className={`${smallNavLinkClass} sm:hidden`} />
                </Link>
                <Link href="/chart">
                    <IoTrophyOutline className={`${smallNavLinkClass} md:hidden`} />
                </Link>
                <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                    <PiSignOutBold className={smallNavLinkClass} />
                </SignOutButton>
            </SignedIn>

            {!userId && <Link href="/sign-in" className="cursor-pointer mx-2 text-link">Login</Link>}

        </nav>
    )
};

export default Topbar;