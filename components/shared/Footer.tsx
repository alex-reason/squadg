import Link from "next/link"
import Image from "next/image"
import logo from "@/public/assets/logo.png"

const Footer = () => {
    return (
        <div className="top-bottom-bars justify-center py-4 px-8 gap-10 min-h-[5rem] border-t-2 border-black-3 z-5">
            <div className="flex items-center justify-center">
                <p className="paragraph-5">All rights reserved, 2024 Mai Reasonda</p>
                <Image src={logo} alt="squad gains logo" className="h-[1.5rem] w-[1.5rem]" />
            </div>
            <Link className="paragraph-5" href="mailto:infosquadgains@gmail.com">Contact</Link>
            <Link className="paragraph-5" href="/terms">Terms of Use</Link>
        </div>
    )
}

export default Footer