import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import Topbar from '@/components/shared/Topbar';
import Leftbar from '@/components/shared/Leftbar';
import Footer from '@/components/shared/Footer';

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
          <main className='flex flex-row h-[100%]'>
            <Topbar />
            <Leftbar />
            <div className='w-[85%] ml-[15%]'>
              {children}
            </div>

          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
};
