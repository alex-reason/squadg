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
            <article className='bg-[#fdfdfdaa] flex flex-col items-center justify-between w-[10rem] h-[14rem] p-2 rounded-lg hover:-translate-y-[.1rem]'>
                <div className='flex flex-col items-center pt-4 relative'>
                    <Image src={userInfo?.avatar || ''} alt='user avatar; images from Blush by Pau Barbaro' height='100' width='100' className='h-20 w-20 object-contain' />
                    <p className='paragraph-3 text-primary-2'>
                        {userInfo?.username}
                    </p>
                    <p className='paragraph-5 font-bold text-black-3 absolute right-2'>
                        lvl {userInfo?.level}
                    </p>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='paragraph-4 text-center'>{`${userInfo?.bio.slice(0, 30)} ${userInfo.bio.length > 30 ? '...': ''}`}</p>
                    <p className='paragraph-1 text-center'>{userInfo?.totalPoints} pts</p>
                </div>
            </article>
        </Link>
    )
}

export default UserCard