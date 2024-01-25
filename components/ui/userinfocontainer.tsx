const UserInfoContainer = ({ title, info }: { title: string, info: string }) => {
    return (
        <div className="flex items-start mb-2">
            <p className="paragraph-3 text-black-3 min-w-[12rem]">{title}:</p>
            <p>{info}</p>
        </div>
    )
}

export default UserInfoContainer