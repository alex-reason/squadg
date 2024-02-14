import Image from "next/image";
import homeTitle from '@/public/assets/Frame 9.png';
import goodies from '@/public/assets/Goodies - Please.png';
import MainButton from "@/components/ui/mainbutton";
import About from "@/components/about";
import { currentUser } from "@clerk/nextjs";
import Heading from "@/components/heading";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="min-h-full lg:p-0">
      <section className="section flex flex-col m-auto items-center md:items-start mt-10 p-4">
        <div className="flex flex-col min-h-screen justify-center items-center w-[90%] mx-auto md:pr-10 ">
          {
            <Image src={homeTitle}
              className="h-[10rem] w-auto md:ml-[-4rem] object-contain drop-shadow-md"
              alt='images from Blush by Pau Barbaro' />
            ||
            <h1 className="heading-1 sm:mt-[20%]">
              Squad Gains
            </h1>
          }
          <h3 className="heading-2 text-gray-1 py-1 text-center">Where friends and fitness come together</h3>
        </div>

        <div className="mx-auto md:pr-10 min-h-[80vh] flex flex-col justify-center items-center w-[100%]">
          <Heading />
          {user ?
            <MainButton href="/workout" btnName="Record a Workout" variant="secondary" />
            : <MainButton href="/signup" btnName="Join" variant="secondary" />
          }
        </div>
      </section>

      <About user={user ? true : false} />
    </main>
  )
}