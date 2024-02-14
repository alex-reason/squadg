import Image from 'next/image';
import MainButton from "@/components/ui/mainbutton";
import logo from '@/public/assets/logo.png'
import { aboutData as data } from '@/public/assets/data';

const About = ({ user }: { user: boolean }) => {
    return (
        <section className='section pl-[8%] mt-[5%] bg-white-1 flex flex-col justify-center p-4'>
            <div className='flex items-center mx-auto md:pr-[1rem]'>
                <Image src={logo} alt='squad gains logo' className="h-[2.5rem] w-[2.5rem]" />
                <h1 className="paragraph-2 text-primary-1">
                    Squad Gains
                </h1>
            </div>
            {data.map(dataItem => (
                <div key={dataItem.id} className='min-h-[80vh] my-4 flex flex-col justify-center items-start'>
                    <div className='flex items-center mr-[1rem] rounded-full'>
                        <Image
                            src={dataItem.image}
                            alt={dataItem.alt}
                            className='object-contain w-[50px] h-[50px] md:w-[100px] md:h-[100px]'
                        />
                    </div>
                    <div className='flex flex-col w-[100%] p-2'>
                        <h3 className='heading-1 text-black-3'>{dataItem.title}</h3>
                        {dataItem.details.map((item, index) => (
                            <h4 key={`details${index}`} className="paragraph-1 text-black-3">{item}</h4>
                        ))}
                    </div>
                </div>
            ))}
            {!user && <MainButton href='/sign-up' btnName='Sign Up' />}
        </section>
    )
};

export default About;