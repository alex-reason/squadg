import Link from "next/link"
import Image from "next/image"
import logo from "@/public/assets/logo.png"

const Footer = () => {
    return (
        <div className="top-bottom-bars flex-col md:flex-row w-[100%] justify-center py-4 px-8 gap-2 md:gap-10 min-h-[5rem] z-5">
            <div className="flex items-center justify-center">
                <p className="paragraph-4">All rights reserved, 2024 Mai Reasonda</p>
                <Image src={logo} alt="squad gains logo" className="h-[1.5rem] w-[1.5rem]" />
            </div>
            <Link className="paragraph-4" href="mailto:infosquadgains@gmail.com">Contact</Link>
            <Link className="paragraph-4" href="/terms">Terms of Use</Link>
        </div>
    )
}

export default Footer