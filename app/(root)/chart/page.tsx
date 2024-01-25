import { fetchTopUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import UserLabel from "@/components/userlabel";

const page = async () => {
    const user = await currentUser();
    const result = !user ? null : await fetchTopUsers();

    return (
        <div className="flex flex-col w-[100%] min-h-screen h-full bg-white fixed margin-padding-lg">
            <h3 className="profile-title mb-4 mt-4">Top of the Squad</h3>
            {!result || result?.users?.length === 0 ? (
                ''
            ) : (
                <div className="flex flex-col items-start justify-start w-[90%] pl-[1rem] mt-[3rem]">
                    {result?.users?.map((person: any, index) => (
                        <div key={person.id} className="flex flex-row w-[100%] items-center gap-4">
                            <p className="paragraph-1">{index + 1}</p>
                            <UserLabel
                                userInfo={{
                                    id: person.id,
                                    username: person.username,
                                    avatar: person.avatar,
                                    points: person.totalPoints,
                                }}
                                optionalClassNames="w-[4rem] h-[4rem]"
                            />
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default page;