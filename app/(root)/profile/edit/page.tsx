import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const userData = {
    id: user.id,
    objectId: userInfo?._id.toString(),
    username: userInfo ? userInfo?.username : user.username,
    bio: userInfo ? userInfo?.bio : "",
    dateJoined: userInfo?.dateJoined,
    avatar: userInfo?.avatar,
    level: userInfo?.level
  };

  return (
    <section className='profile-section m-auto mb-10'>
      <AccountProfile user={userData} btnTitle='Apply Changes' onboarding={false} />
    </section>
  );
}

export default Page;