"use client"
import Link from "next/link"
import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { PiSignOutBold } from "react-icons/pi";
import { MdLibraryAdd } from "react-icons/md";
import { BsFillPeopleFill, BsTrophyFill } from "react-icons/bs";
import { RiTrophyFill } from "react-icons/ri";

const Topbar = ({ children }: { children?: React.ReactNode }) => {
    const { userId } = useAuth();
    const router = useRouter();
    const navLinkClass = "cursor-pointer mx-2 text-link hidden sm:block";
    const smallNavLinkClass = "cursor-pointer mx-2 sm:mx-4 text-black-3 hover:translate-y-[-.5px] text-[1.2rem] hover:drop-shadow-sm block";

    return (
        <nav className="top-bottom-bars w-[100%] justify-end px-4 py-2 border-b-2 border-black-3 shadow-1 fixed top-0 right-0 z-20">
            <Link href="/" className="uppercase mr-auto font-bold text-[.8rem] sm:text-[1rem] text-primary-3 hover:translate-y-[-.5px] hover:drop-shadow-sm">
                Squad Gains
            </Link>
            <SignedIn>
                <Link href={`/profile/${userId}`} className="flex">
                    {children}
                </Link>
                <Link href="/workout" >
                    <p className={navLinkClass}>Add Workout</p>
                    <MdLibraryAdd className={`${smallNavLinkClass} sm:hidden`} />
                </Link>
                <Link href="/friends">
                    <p className={navLinkClass}>Friends</p>
                    <BsFillPeopleFill className={`${smallNavLinkClass} sm:hidden`} />
                </Link>
                <Link href="/chart">
                    <RiTrophyFill className={`${smallNavLinkClass} md:hidden`} />
                </Link>
                <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                    <PiSignOutBold className={smallNavLinkClass} />
                </SignOutButton>
            </SignedIn>

            {!userId && <Link href="/sign-in" className={navLinkClass} >Login</Link>}

        </nav>
    )
};

export default Topbar;