import Image from 'next/image'
import Link from 'next/link';

interface UserCardProps {
    userInfo: {
        id: string,
        username: string,
        avatar: string,
        bio: string,
        totalPoints: number,
        level: number,
    },
};


const UserCard = ({ userInfo }: UserCardProps) => {
    return (
        <Link href={`/profile/${userInfo.id}`} className='w-auto'>
            <article
                className='bg-[#fdfdfdaa] flex flex-col items-center justify-between w-[15rem] sm:w-[11rem] h-[18rem] p-2 rounded-lg hover:-translate-y-[.1rem]'
            >
                <p className='paragraph-3 text-center bg-gray-2 px-2 py-1 rounded-md mt-2'>
                    {`${userInfo?.bio.slice(0, 30)} ${userInfo.bio.length > 30 ? '...' : ''}`}
                </p>
                <div className='flex flex-col items-center pb-10 relative'>
                    <Image
                        src={userInfo?.avatar || ''}
                        alt='user avatar; images from Blush by Pau Barbaro'
                        height='100' width='100' className='h-25 sm:h-20 w-25 sm:w-20 object-contain'
                    />
                    <p className='paragraph-2 text-primary-2'>
                        {userInfo?.username}
                    </p>
                    <p className='paragraph-4 font-bold text-black-3 absolute right-2'>
                        lvl {userInfo?.level}
                    </p>
                    <p className='paragraph-1 text-black-3 text-center'>
                        {userInfo?.totalPoints} pts
                    </p>
                </div>


            </article>
        </Link>
    )
}

export default UserCard