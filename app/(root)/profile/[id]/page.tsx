import { redirect } from "next/navigation";
import { UserButton, currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { formatDateString2 } from "@/lib/utils";
import UserInfoContainer from "@/components/ui/userinfocontainer";
import MainButton from "@/components/ui/mainbutton";
import Image from "next/image";
import WorkoutProfile from "@/components/workoutprofile";
import { IoSettingsOutline } from "react-icons/io5";

const Page = async ({ params }: { params: { id: string } }) => {
    const userInfo = JSON.parse(JSON.stringify(await fetchUser(params.id)));
    if (!userInfo?.username) redirect("/onboarding");

    const user = await currentUser();
    const formattedDateJoined = formatDateString2(userInfo.dateJoined);
    const accountSettingsButton = "bg-accent relative w-[180px] h-[42px] text-black-3 border-black-3 cursor-pointer flex items-center justify-center py-1 mt-4 text-[.8rem] uppercase font-extrabold rounded-md border-[1px] shadow-sm hover:-translate-y-[.1rem]";

    return (
        <section className="profile-section mb-10">
            <div className="profile-container p-8 mt-10 ">
                <div className="flex items-end gap-10">
                    <div className="flex flex-col items-center min-w-[50%] max-w-[50%]">
                        <h3 className="profile-title">{userInfo?.username}</h3>
                        <Image src={userInfo?.avatar || ''} alt='user avatar; images from Blush by Pau Barbaro' height='100' width='100' className='w-30 h-30 object-contain' />
                        <p className="paragraph-4 text-center bg-primary-lighter rounded-full p-2">{userInfo.bio}</p>
                    </div>

                    <div className="flex flex-col">
                        <UserInfoContainer title='Username' info={userInfo.username} />
                        <UserInfoContainer title='Member Since' info={formattedDateJoined} />
                        <UserInfoContainer title='Level' info={userInfo.level} />
                        <UserInfoContainer title='Total Points' info={userInfo.totalPoints || '0'} />
                        {
                            user?.id === params.id &&
                            <UserInfoContainer title='To level up' info={`${((userInfo.level + 1) * 250) - userInfo.totalPoints} pts`} />
                        }
                    </div>
                </div>

                {
                    user?.id === params.id &&
                    <div className="flex justify-start gap-4 mx-auto mt-10">
                        <MainButton
                            href='/profile/edit'
                            btnName="Update Profile"
                            variant="primary"
                        />
                        <div className={accountSettingsButton}>
                            <IoSettingsOutline />
                            <p className="ml-1">Account Settings</p>
                            <UserButton />
                        </div>
                    </div>
                }

            </div>

            <WorkoutProfile workoutInfo={userInfo.workouts} />
        </section>
    );
};

export default Page;