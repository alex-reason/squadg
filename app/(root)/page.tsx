import Image from "next/image";
import homeTitle from '@/public/assets/Frame 9.png'
import MainButton from "@/components/ui/mainbutton";
import About from "@/components/about";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="min-h-full text-black-3">

      <section className="section flex flex-col items-start justify-center ">
        {
            <Image src={homeTitle} className="h-[10rem] w-auto ml-[-2rem] mx-auto" alt='images from Blush by Pau Barbaro' />
          ||
          <h1 className="heading-1 mt-[20%]">
            Squad Gains
          </h1>
        }
        <h3 className='heading-2 py-1 px-2 w-[90%]'>
          Where friends and fitness come together
        </h3>
      </section>

      <section className="min-h-screen h-full px-2 flex flex-col items-center justify-center text-center mt-[10%]">
        <h3 className="heading-4 leading-none py-1 px-2 w-[70%] mb-10">
          Creating a healthy lifestyle shouldn&apos;t be boring. Track your workouts, see your friends&apos; progress, and make exercising more fun.{" "}
        </h3>
        {
          user ?
            <>
              <p className="text-paragraph-3 text-black-4">
                Welcome Back!
              </p>
              <MainButton href='/workout' btnName='Add Workout' variant='accent' />
            </>
            :
            <MainButton href='/sign-up' btnName='join' variant='accent' />
        }
      </section>

      <About user={user ? true : false} />
    </main>
  )
}