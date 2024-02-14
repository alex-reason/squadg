import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import '../globals.css';

export const metadata = {
    title: 'Squad Gains',
    description: 'A Fitness Tracker that help motivate you and your friends. Created with Next.js'
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-primary-lighter`}>
                    <div className='w-full flex-centered flex-col justify-center min-h-screen'>
                        <Link href='/' className='flex flex-col items-center'>
                            <Image src={logo} alt='squad gains logo' className="h-[3rem] w-[3rem]" />
                            <h1 className='paragraph-2 mb-2 text-primary-3'>Squad Gains</h1>
                        </Link>
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}