import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import Topbar from '@/components/shared/Topbar';
import Leftbar from '@/components/shared/Leftbar';
import Footer from '@/components/shared/Footer';
import defaultPhoto from '@/public/assets/Default.png';

import '../globals.css';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Squad Gains',
  description: 'A Fitness Tracker that help motivate you and your friends. Created with Next.js'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className='flex h-[100%]'>
            <Topbar> <Image src={defaultPhoto} className="h-10 w-10" alt="user default photo" /></Topbar>
            <Leftbar />
            <div className='w-[100%] md:w-[85%] md:ml-[15%]'>
              {children}
            </div>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
};
