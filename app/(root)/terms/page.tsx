import Image from "next/image";
import { termsOfUse } from "@/public";
import logo from '@/public/assets/logo.png';

const page = () => {
  return (
    <div className="min-h-screen mt-10 p-8 pl-[8%] flex flex-col gap-4 bg-white-1">
      <Image src={logo} alt='squad gains logo' className="h-[5rem] w-[5rem]" />
      {termsOfUse.map((term, index) =>
      (
        <div key={index} className="w-[90%]">
          <p className="paragraph-3">{term.title}</p>
          {
            term.content.map((info, index) => (
              <p className="paragraph-5 my-1" key={index}>{info}</p>
            ))
          }
        </div>
      )
      )}
    </div>
  )
}

export default page