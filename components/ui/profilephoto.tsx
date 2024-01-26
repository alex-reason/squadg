
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import avatarDefault from "@/public/assets/Default.png"
import Image from "next/image";

const ProfilePhoto = async ({ optionalClassName }: { optionalClassName?: string }) => {
    const user = await currentUser();
    const userInfo = user && await fetchUser(user.id)

    return (
        <Image
            src={!userInfo ? avatarDefault : userInfo?.avatar}
            width='100'
            height='100'
            alt='profile avatar'
            className={`w-10 h-10 ${optionalClassName} hover:translate-y-[-.5px] hover:drop-shadow-sm object-contain `}
        />
    );
}

export default ProfilePhoto;