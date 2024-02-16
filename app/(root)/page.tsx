import Image from "next/image";
import homeTitle from '@/public/assets/Frame 9.png';
import MainButton from "@/components/ui/mainbutton";
import About from "@/components/about";
import { currentUser } from "@clerk/nextjs";
import Heading from "@/components/heading";
import SiteTitle from "@/components/sitetitle";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="min-h-full lg:p-0">
      <section className="section flex flex-col m-auto items-center md:items-start mt-10 p-4">
        <SiteTitle />
        
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