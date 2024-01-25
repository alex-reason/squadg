import Image from 'next/image'
import React from 'react'
import thumbsUp from '@/public/assets/Dayflow - Chat Ok.png';
import { cardioPoints, fullBodyPoints, toningPoints } from '@/public/assets/data';

const PointSystem = ({ category }: { category: 'cardio' | 'fullbody' | 'toning' }) => {
    const cardioPointSystem = [`RUNNING: ${cardioPoints.running} pt/s per minute`, `WALKING: ${cardioPoints.walking} pt/s per 1000 steps`, `CARDIO EXERCISE: ${cardioPoints.cardio} pt/s per minute`];
    const fullBodyPointSystem = [`SPORTS: ${fullBodyPoints.sports} pt/s per minute`, `YOGA: ${fullBodyPoints.yoga} pt/s per minute`, `PILATES: ${fullBodyPoints.pilates} pt/s per minute`, `CYCLING: ${fullBodyPoints.cycling} pt/s per minute`];
    const toningPointSystem = [`LOWER BODY: ${toningPoints.lowerbody} pt/s per reps`, `UPPER BODY: ${toningPoints.upperbody} pt/s per reps`, `CORE: ${toningPoints.core} pt/s per reps`,];

    return (
        <article className='bg-primary-lighter rounded-lg m-2 p-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-8'>
            <Image src={thumbsUp} alt='from Blush by Pau Barbaro' className='w-[2rem] sm:w-[5rem] h-auto opacity-[80%]' />
            <div>
                <p className='paragraph-3 mb-2'>{category} Point System</p>
                {
                    category === 'cardio' ?
                        <>
                            {cardioPointSystem.map((info, index) =>
                                <p className='paragraph-4' key={`cardiopointsystem-${index}`}>{info}</p>)
                            }
                        </>
                        : category === 'fullbody' ?
                            <>
                                {fullBodyPointSystem.map((info, index) =>
                                    <p className='paragraph-4' key={`fullbodypointsystem-${index}`}>{info}</p>)
                                }
                            </>
                            :
                            <>
                                {toningPointSystem.map((info, index) =>
                                    <p className='paragraph-4' key={`fullbodypointsystem-${index}`}>{info}</p>)
                                }
                            </>
                }

            </div>
        </article>
    )
}

export default PointSystem