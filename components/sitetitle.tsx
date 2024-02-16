"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
import homeTitle from '@/public/assets/Frame 9.png';

const SiteTitle = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-[90%] mx-auto md:pr-10 ">
      <motion.div
      className="mx-auto md:pl-20"
        initial={{ rotate: -3 }}
        animate={{ rotate: 3 }}
        transition={{ ease: "linear", repeat: Infinity,  repeatType: "reverse", duration: 5 }}
      >
        {
          <Image src={homeTitle}
            className="h-[5rem] sm:h-[10rem] w-auto md:ml-[-4rem] object-contain drop-shadow-md"
            alt='images from Blush by Pau Barbaro' />
          ||
          <h1 className="heading-1 sm:mt-[20%]">
            Squad Gains
          </h1>
        }

      </motion.div>
      <h3 className="heading-2 text-black-3 py-1 text-center">Where friends and fitness come together</h3>
    </div>
  )
}

export default SiteTitle