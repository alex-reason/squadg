import Image from 'next/image'
import Link from 'next/link';

interface UserLabelProps {
    userInfo: {
        id: string;
        username: string;
        avatar: string;
        points: number;
    },
    optionalClassNames?: string
};


const UserLabel = ({ userInfo, optionalClassNames }: UserLabelProps) => {
    return (
        <article className='border-gray-3 border-b-[1px] w-full hover:-translate-y-[.1rem] mb-4'>
            <Link href={`/profile/${userInfo.id}`}>
                <div className='flex items-center gap-2'>
                    <Image src={userInfo?.avatar || ''} 
                    alt='user avatar; images from Blush by Pau Barbaro' 
                    height='100' width='100' 
                    className={`${optionalClassNames} object-contain`} />
                    <div className='flex flex-col'>
                        <p className='paragraph-4 text-primary-3 font-bold'>
                            {userInfo?.username}
                        </p>
                        <p className='paragraph-4 text-black-4 font-normal'>
                            {`${userInfo?.points} pts` || 'N/A'}
                        </p>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default UserLabel