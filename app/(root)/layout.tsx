import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import Topbar from '@/components/shared/Topbar';
import Leftbar from '@/components/shared/Leftbar';
import Footer from '@/components/shared/Footer';
import ProfilePhoto from '@/components/ui/profilephoto';
import '../globals.css';
const inter = Inter({ subsets: ['latin'] })
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Squad Gains',
  description: 'Squad Gains is a Fitness Tracker that help motivate you and your friends. Created with Next.js'
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
            <Topbar> <ProfilePhoto optionalClassName='mx-2' /></Topbar>
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
