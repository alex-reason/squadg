import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (userInfo?.onboarded) redirect('/')

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        name: userInfo ? userInfo?.name : user?.firstName || '',
        username: userInfo?.username,
        bio: userInfo ? userInfo?.bio : '',
        dateJoined: user?.createdAt,
        avatar: userInfo?.avatar,
        level: userInfo?.level
    };

    return (
        <main className="centered-section justify-start px-2 py-4 w-[60%]">
            <h3 className="mt-3 heading-4 text-center">
                Complete your profile
            </h3>
            <AccountProfile user={userData} btnTitle="Continue" onboarding />
        </main>
    )
};

export default Page;