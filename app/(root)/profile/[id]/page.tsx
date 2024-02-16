import { redirect } from "next/navigation";
import { UserButton, currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { formatDateString2 } from "@/lib/utils";
import { IoSettingsOutline } from "react-icons/io5";

import UserInfoContainer from "@/components/ui/userinfocontainer";
import WorkoutProfile from "@/components/workoutprofile";
import MainButton from "@/components/ui/mainbutton";
import Image from "next/image";
import { motion } from 'framer-motion';
import UserProfile from "@/components/ui/userprofile";
const Page = async ({ params }: { params: { id: string } }) => {
    const userInfo = JSON.parse(JSON.stringify(await fetchUser(params.id)));
    if (!userInfo?.username) redirect("/onboarding");

    const user = await currentUser();
    const formattedDateJoined = formatDateString2(userInfo.dateJoined);
    const accountSettingsButton = "button bg-accent relative sm:min-w-[180px] h-[42px] text-black-3 border-black-3 cursor-pointer py-1 px-2 mt-4 ";

    return (
        <section className="profile-section mb-10">
            <div className="centered-section profile-container margin-padding-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between md:justify-normal gap-10">
                    {/* <motion.div className="flex flex-col items-center lg:min-w-[50%] max-w-[50%]"
                                    animate={{ x: 100 }}
                                    transition={{ delay: 1 }}
                    >
                        <h3 className="profile-title">{userInfo?.username}</h3>
                        <Image
                            src={userInfo?.avatar || ''}
                            height={100} width={100}
                            alt='user avatar; images from Blush by Pau Barbaro'
                            className='w-30 h-30 object-contain'
                        />
                        <p className="paragraph-3 text-center bg-primary-lighter rounded-full p-2">{userInfo.bio}</p>
                    </motion.div> */}
                    <UserProfile username={userInfo.username} avatar={userInfo.avatar} bio={userInfo.bio} />

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
                    <div className="flex justify-start gap-2 sm:gap-4 mx-auto sm:mt-10">
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