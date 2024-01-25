import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";

const CondensedFormItem = ({ children, label, profileForm = false }: { children: React.ReactNode, label: string, profileForm?: boolean }) => {
    const formLabelClass = "paragraph-3 text-black-3 mb-2 sm:mb-0";

    return (
        <div className="w-[100%] flex flex-col md:flex-row md:items-center">
            <FormLabel className={`${formLabelClass} ${profileForm ? 'min-w-[5rem] md:min-w-[10rem]' : 'min-w-[14rem]'}`}>
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


        </div>
    )
}

export default CondensedFormItem;