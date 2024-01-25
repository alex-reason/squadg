import WorkoutForm from "@/components/forms/WorkoutForm";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = JSON.parse(JSON.stringify(await fetchUser(user.id)));

  return (
    <div className='min-h-screen bg-gray-1 mt-10 p-8 flex flex-col justify-center'>
      <WorkoutForm userId={user.id} workoutInfo={userInfo.workouts} userLevel={userInfo.level || 0}/>
    </div>
  )
}

export default page