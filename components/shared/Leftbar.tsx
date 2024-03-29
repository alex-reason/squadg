import { fetchTopUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import UserLabel from "@/components/userlabel";

const Leftbar = async () => {
  const user = await currentUser();
  const result = !user ? null : await fetchTopUsers();

  return (
    <div className="hidden md:flex md:flex-wrap w-[15%] min-h-screen h-full bg-white fixed ">
      {!result || result?.users?.length === 0 ? (
        ''
      ) : (
        <div className="flex flex-col items-start justify-start w-[90%] pl-[1rem] mt-[3rem]">
          {result?.users?.map((person: any) => (
            <UserLabel
              userInfo={{
                id: person.id,
                username: person.username,
                avatar: person.avatar,
                points: person.totalPoints,
              }}
              optionalClassNames="w-7 h-7 lg:w-10 lg:h-10"
              key={person.id}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Leftbar;