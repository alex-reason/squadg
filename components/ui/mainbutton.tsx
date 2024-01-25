import Link from "next/link"

interface MainButtonProps {
    href: string,
    btnName: string,
    variant?: string,
};

const MainButton = ({ href, btnName, variant = 'primary' }: MainButtonProps) => {
    let btnClassName = ''
    if (variant === 'primary') {
        btnClassName = 'bg-black-3 text-white-1 px-2 sm:px-6 border-black-3'
    } else if (variant === 'accent') {
        btnClassName = 'bg-accent text-black-3 px-2 sm:px-4 border-black-3'
    } else if (variant === 'secondary') {
        btnClassName = 'bg-white-1 text-primary-3 px-2 sm:px-6 border-primary-1'
    }
    return (
        <Link
            href={href}
            className={`${btnClassName} button w-auto mt-4`}>
            <p>{btnName}</p>
        </Link>
    )
}

export default MainButton;