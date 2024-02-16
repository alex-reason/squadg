"use client";
import Image from "next/image";
import { motion } from 'framer-motion';

const UserProfile = ({ username, avatar, bio }: { username: string, avatar: string, bio?: string }) => {
    return (
        <motion.div className="flex flex-col items-center lg:min-w-[50%] max-w-[50%]"
            initial={{ opacity: .5 }}
            animate={{ opacity: 1 }}
            transition={{ease: "linear",}}
        >
            <h3 className="profile-title">{username}</h3>
            <Image
                src={avatar || ''}
                height={100} width={100}
                alt='user avatar; images from Blush by Pau Barbaro'
                className='w-30 h-30 object-contain'
            />
            <p className="paragraph-3 text-center bg-primary-lighter rounded-full p-2">{bio}</p>
        </motion.div>
    )
}

export default UserProfile;