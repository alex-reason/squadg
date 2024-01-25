import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";

const CondensedFormItem = ({ children, label, profileForm = false }: { children: React.ReactNode, label: string, profileForm?: boolean }) => {
    const formLabelClass = "paragraph-3 text-black-3 ";

    return (
        <>
            <FormLabel className={`${formLabelClass} ${profileForm ? 'min-w-[10rem]' : 'min-w-[14rem]'}`}>
                {label}
            </FormLabel>
            {!profileForm ?

                <div className='w-[100%] flex-col mt-0'>
                    <FormControl>
                        {children}
                    </FormControl>
                    <FormMessage className='text-[0.5rem] pt-2 absolute'></FormMessage>
                </div>
                :
                <>
                    <FormControl>
                        {children}
                    </FormControl>
                    <FormMessage className='text-[0.5rem] pt-2 absolute'></FormMessage>
                </>
            }


        </>
    )
}

export default CondensedFormItem;