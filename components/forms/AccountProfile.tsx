"use client";
import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import { deletedUser, updateUser } from "@/lib/actions/user.actions";
import { Form, FormField, FormItem, } from "@/components/ui/form";
import { Input, Textarea, MainButton, CondensedFormItem, FormButton } from "@/components/ui";
import { defaultAvatar, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar17 } from "@/public";
import { FaCheckCircle } from "react-icons/fa";

interface AccountProps {
    user: {
        id: string;
        objectId: string;
        username: string;
        bio: string;
        dateJoined: number;
        avatar: string;
        level: number
    };
    btnTitle: string;
    onboarding: boolean;
};

const AccountProfile = ({ user, btnTitle, onboarding }: AccountProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const upgradedAvatarList = [avatar9, avatar17];
    const defaultAvatarList = [defaultAvatar, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8]
    const avatarList = (user?.level < 2 || onboarding) ? defaultAvatarList : defaultAvatarList.concat(upgradedAvatarList)
    const [myAvatar, setMyAvatar] = useState(user?.avatar || defaultAvatar);

    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            username: user?.username || "",
            bio: user?.bio || "",
        }
    });

    const onSubmit = async (values: z.infer<typeof UserValidation>) => {
        await updateUser({
            path: pathname,
            username: values.username,
            userId: user.id,
            bio: values.bio,
            dateJoined: user.dateJoined,
            avatar: myAvatar
        });

        if (pathname === "profile/edit") {
            router.back();
        } else {
            router.push(`/profile/${user.id}`);
        }
    };

    const formItemClassName = "flex gap-3 w-full mb-[1.5rem] items-start";

    return (
        <Form {...form}>

            <button type="button" onClick={() => deletedUser(user.id)}>Delete account</button>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`centered-section profile-container ${onboarding ? "p-4" : "margin-padding-lg"}`}
            >

                {!onboarding && <h3 className="profile-title mb-4">Update Profile</h3>}
                <div className={`flex flex-col lg:flex-row ${onboarding && "flex-col"}`}>
                    <div className="flex flex-col flex-1 justify-center md:justify-start lg:mr-[5rem]">

                        {/* username */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className={formItemClassName}>
                                    <CondensedFormItem label="username" profileForm={true}>
                                        <Input type="text" className="form-input no-focus" {...field} />
                                    </CondensedFormItem>
                                </FormItem>
                            )}
                        />
                        {/* bio */}
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem className={formItemClassName}>
                                    <CondensedFormItem label="bio" profileForm={true}>
                                        <Textarea
                                            rows={3}
                                            className="form-input no-focus"
                                            {...field}
                                        />
                                    </CondensedFormItem>
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* avatar */}
                    <div className="flex flex-1 flex-col">
                        <p className="paragraph-3 text-black-3 min-w-[10rem]">Avatar:</p>
                        <div className="grid grid-cols-3 gap-0 w-[100%] lg:w-[80%]">
                            {
                                avatarList.map((imageLink, index) => (
                                    <div className="mr-2 w-fit relative" key={index}>
                                        <Image src={imageLink} alt="from blush by Pau Barbaro" height="100" width="100" className="w-20 h-20 object-contain" onClick={() => setMyAvatar(imageLink)} />
                                        {imageLink === myAvatar && <FaCheckCircle className="text-[#6BE432] absolute bottom-2 right-0" />}
                                    </div>
                                ))
                            }

                        </div>
                        <p className="mt-2 paragraph-4 text-primary-1">Unlock more avatars as you level up!</p>
                    </div>

                </div>

                <div className="flex justify-start gap-4 mt-10">
                    <FormButton btnName={btnTitle} optionalClassName="mt-4" />
                    {!onboarding &&
                        <MainButton href={`/profile/${user.id}`} btnName="Cancel" variant="secondary" />
                    }
                </div>
            </form>
        </Form>
    )
};

export default AccountProfile;