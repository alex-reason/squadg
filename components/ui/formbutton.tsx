import { Button } from '@/components/ui/button';

const FormButton = ({ btnName, optionalClassName }: { btnName: string, optionalClassName?: string }) => {
    return (
        <Button
            type="submit"
            className={`button px-8 bg-black-3 text-white-1 border-black-3 ${optionalClassName}`}>
            {btnName}
        </Button>
    )
}

export default FormButton;