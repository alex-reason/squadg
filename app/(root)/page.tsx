import Image from "next/image";
import homeTitle from '@/public/assets/Frame 9.png'
import goodies from '@/public/assets/Goodies - Please.png'
import MainButton from "@/components/ui/mainbutton";
import About from "@/components/about";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="min-h-full text-black-3 lg:p-0">
      <section className="section flex flex-col m-auto items-center md:items-start justify-center p-4">
        {
            <Image src={homeTitle} className="h-[10rem] w-auto md:ml-[-2rem] object-contain" alt='images from Blush by Pau Barbaro' />
          ||
          <h1 className="heading-1 mt-[20%] ">
            Squad Gains
          </h1>
        }
        <h3 className='heading-2 py-1 px-2 w-[100%] md:w-[90%] text-center md:text-left'>
          Where friends and fitness come together
        </h3>
      </section>

      <section className="min-h-screen h-full flex flex-col items-center justify-center text-center mt-[10%] p-4 lg:px-2">
      <Image src={goodies} className="h-[5rem] w-auto object-contain" alt='images from Blush by Pau Barbaro' />
        <h3 className="heading-4 leading-none py-1 px-2 w-[100%] lg:w-[70%] mb-10">
          Creating a healthy lifestyle shouldn&apos;t be boring. Track your workouts, see your friends&apos; progress, and make exercising more fun.{" "}
        </h3>
        {
          user ?
            <div className="flex items-end gap-2">
              <p className="paragraph-1 text-black-4">
                Welcome Back!
              </p>
              <MainButton href='/workout' btnName='Add Workout' variant='accent' />
            </div>
            :
            <MainButton href='/sign-up' btnName='join' variant='accent' />
        }
      </section>

      <About />
    </main>
  )
}