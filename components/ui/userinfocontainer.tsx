const UserInfoContainer = ({ title, info }: { title: string, info: string }) => {
    return (
        <div className="flex items-start mb-1 sm:mb-2">
            <p className="paragraph-2 text-black-3 min-w-[10rem] sm:min-w-[12rem]">{title}:</p>
            <p className="paragraph-3 text-black-3">{info}</p>
        </div>
    )
}

export default UserInfoContainer