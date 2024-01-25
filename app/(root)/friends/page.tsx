import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { fetchUser, fetchAllUsers } from "@/lib/actions/user.actions";
import UserCard from "@/components/usercard";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchAllUsers()

  return (
    <section className="min-h-screen h-full pt-5">
      <div className='flex flex-col gap-3 p-4 mt-10 w-[90%] mx-auto'>
        {!result || result.users.length === 0 ? (
          <p className='no-result'>No Result</p>
        ) : (
          <div className="grid grid-cols-5">
            {result.users.map((person: any) => (
              <UserCard
                userInfo={{
                  id: person.id,
                  username: person.username,
                  avatar: person.avatar,
                  bio: person.bio,
                  totalPoints: person.totalPoints,
                  level: person.level
                }}
                key={person.id}
              />
            ))}
          </div>
        )}
      </div>

    </section>
  );

}

export default page