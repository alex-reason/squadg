'use client';
import * as z from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { WorkoutValidation } from '@/lib/validations/workout';
import { updateUserWorkout } from '@/lib/actions/user.actions';
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input, FormButton, CondensedFormItem } from '@/components/ui';
import PointSystem from '@/components/pointsystem';
import WorkoutTabs from '@/components/workouttabs';

interface WorkoutFormProps {
    userId: string,
    workoutInfo: {
        cardio: {
            runMinutes: number,
            walkSteps: number,
            cardioExercise: number,
        },
        fullbody: {
            sportsMinutes: number,
            yogaMinutes: number,
            pilatesMinutes: number,
            cyclingMinutes: number,
        },
        toning: {
            lowerReps: number,
            upperReps: number,
            coreReps: number,
        }

    },
    userLevel: number
};

const WorkoutForm = ({ userId, workoutInfo, userLevel }: WorkoutFormProps) => {
    const [category, setCategory] = useState<'cardio' | 'fullbody' | 'toning'>('cardio');

    const router = useRouter();

    const previousValues = {
        prevRun: workoutInfo?.cardio.runMinutes || 0,
        prevWalk: workoutInfo?.cardio.walkSteps || 0,
        prevCardio: workoutInfo?.cardio.cardioExercise || 0,

        prevSports: workoutInfo?.fullbody?.sportsMinutes || 0,
        prevYoga: workoutInfo?.fullbody?.yogaMinutes || 0,
        prevPilates: workoutInfo?.fullbody?.pilatesMinutes || 0,
        prevCycling: workoutInfo?.fullbody?.cyclingMinutes || 0,

        lowerReps: workoutInfo?.toning?.lowerReps || 0,
        upperReps: workoutInfo?.toning?.upperReps || 0,
        coreReps: workoutInfo?.toning?.coreReps || 0,

    };

    const form = useForm({
        resolver: zodResolver(WorkoutValidation),
        defaultValues: {
            runMinutes: 0,
            walkSteps: 0,
            cardioExercise: 0,

            sportsMinutes: 0,
            yogaMinutes: 0,
            pilatesMinutes: 0,
            cyclingMinutes: 0,

            lowerReps: 0,
            upperReps: 0,
            coreReps: 0,
        }
    });

    const onSubmit = async (values: z.infer<typeof WorkoutValidation>) => {
        await updateUserWorkout({
            userId,
            workouts: {
                cardio: {
                    runMinutes: previousValues.prevRun + values.runMinutes,
                    walkSteps: previousValues.prevWalk + values.walkSteps,
                    cardioExercise: previousValues.prevCardio + values.cardioExercise
                },
                fullbody: {
                    sportsMinutes: previousValues.prevSports + values.sportsMinutes,
                    yogaMinutes: previousValues.prevYoga + values.yogaMinutes,
                    pilatesMinutes: previousValues.prevPilates + values.pilatesMinutes,
                    cyclingMinutes: previousValues.prevCycling + values.cyclingMinutes
                },
                toning: {
                    lowerReps: previousValues.lowerReps + values.lowerReps,
                    upperReps: previousValues.upperReps + values.upperReps,
                    coreReps: previousValues.coreReps + values.coreReps,
                }
            },
            userLevel
        });

        router.push(`/`);
    };

    const formClassName = 'bg-white min-h-[30rem] pb-0 rounded-lg w-[90%] m-auto flex flex-col justify-between';
    const formItemClassName = 'flex items-center w-[100%] lg:w-[60%] mb-2';

    return (
        <div className='mt-[4%]'>
            <WorkoutTabs category={category} setCategory={setCategory} optionalClassName='left-14 -top-[2rem]' />

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className={formClassName}>
                    <div className='flex flex-col gap-2 p-4 sm:px-[4rem] pt-[2rem]'>

                        {/* **** CATEGORY: CARDIO **** */}
                        {category === 'cardio' &&
                            <>
                                <FormField
                                    control={form.control}
                                    name="runMinutes"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='Run (minutes)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="walkSteps"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='Walking (steps)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="cardioExercise"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='Cardio Exercise (minutes)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />
                            </>
                        }

                        {/* **** CATEGORY: FULLBODY **** */}

                        {category === 'fullbody' &&
                            <>
                                <FormField
                                    control={form.control}
                                    name="sportsMinutes"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='Sports minutes'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="yogaMinutes"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='yoga (Minutes)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="pilatesMinutes"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='pilates (minutes)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cyclingMinutes"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='cycling (minutes)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />
                            </>
                        }

                        {/* **** CATEGORY: TONING **** */}

                        {category === 'toning' &&
                            <>
                                <FormField
                                    control={form.control}
                                    name="lowerReps"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='lower workouts (reps)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="upperReps"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='upper workout (reps)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="coreReps"
                                    render={({ field }) => (
                                        <FormItem className={formItemClassName}>
                                            <CondensedFormItem label='core workout (reps)'>
                                                <Input type='number' className='form-input no-focus' {...field} />
                                            </CondensedFormItem>
                                        </FormItem>
                                    )}
                                />
                            </>
                        }
                    </div>

                    <FormButton btnName='Record workouts' optionalClassName='my-[1rem] mx-auto'/>
                    <PointSystem category={category} />
                </form>

            </Form>
        </div>
    )
};

export default WorkoutForm;