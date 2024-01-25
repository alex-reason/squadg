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
    <section className="min-h-screen h-full margin-padding-lg">

        {!result || result.users.length === 0 ? (
          <p className='no-result'>No Result</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-10 m-auto justify-items-center">
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


    </section>
  );

}

export default page