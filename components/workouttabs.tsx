interface WorkoutTabsProps {
    category: 'cardio' | 'fullbody' | 'toning',
    setCategory: React.Dispatch<React.SetStateAction<'cardio' | 'fullbody' | 'toning'>>,
    optionalClassName?: string
};

const WorkoutTabs = ({ category, setCategory, optionalClassName }: WorkoutTabsProps) => {
    const tabClassName = 'py-1 px-2 sm:px-8 text-link';

    return (
        <div className={`w-[90%] mx-auto ${optionalClassName}`}>
            <button
                type='button'
                className={`${tabClassName} rounded-tl-lg ${category === 'cardio' ? 'bg-accent' : 'bg-gray-2'}`}
                onClick={() => setCategory('cardio')}
            >
                Cardio
            </button>

            <button
                type='button'
                className={`${tabClassName} ${category === 'fullbody' ? 'bg-accent' : 'bg-gray-2'}`}
                onClick={() => setCategory('fullbody')}
            >
                fullbody
            </button>

            <button
                type='button'
                className={`${tabClassName} rounded-tr-lg border-r-2 ${category === 'toning' ? 'bg-accent' : 'bg-gray-2'}`}
                onClick={() => setCategory('toning')}
            >
                Toning
            </button>

        </div>

    )
}

export default WorkoutTabs;