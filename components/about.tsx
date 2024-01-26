import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import { aboutData as data } from '@/public/assets/data';

const About = () => {
    return (
        <section className='section pl-[8%] mt-[5%] bg-white-1 flex flex-col items-center md:items-start justify-center p-4'>
            <Image src={logo} alt='squad gains logo' className="h-[5rem] w-[5rem]" />
            {data.map(dataItem => (
                <div key={dataItem.id} className='my-4 flex flex-col md:flex-row items-center'>
                    <div className='flex items-center mr-[1rem] rounded-full'>
                        <Image
                            src={dataItem.image}
                            alt={dataItem.alt}
                            className='object-contain w-[50px] h-[50px] md:w-[100px] md:h-[100px]'
                        />
                    </div>
                    <div className='flex flex-col items-center text-center md:text-left md:items-start w-[100%] p-2'>
                        <h3 className='paragraph-3 text-black-3'>{dataItem.title}</h3>
                        {dataItem.details.map((item, index) => (
                            <p key={`details${index}`} className="paragraph-1">{item}</p>
                        ))}
                    </div>
                </div>
            ))}
            {/* {!user && <MainButton href='/sign-up' btnName='Sign Up' />} */}
        </section>
    )
};

export default About;