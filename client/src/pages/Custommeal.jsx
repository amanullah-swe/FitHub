import React from 'react';
import { testMealImage } from '../assets'
import Leftsidebar from '../components/Leftsidebar'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { getPreviousDate } from '../helpers/getPrevioudDate';
import { useDispatch, useSelector } from 'react-redux';
import { clearDietAndMealApiMessage, fetchDailyFitnessAndMealsDataAsync, selectDietAndMealApiMessage, selectFitness } from '../features/fitnesAndDiet/fitnessAndDietSlice';
import { selectMeal, showCustomMeals } from '../features/meal/mealSlice';
import { baseUrl } from '../app/constant';
import TostifyPop, { errorPop, successPop } from '../components/TostifyPop';
import { imageBreakIcon, userImageIcon } from '../assets/images';
import Navbar from '../components/Navbar';

// NOTE 
/* this component trying to display the two types of meal one is provides by the website and second is the user created 
1) if meal is provide by website then its simple take id from the parameter and go and fetch the data by fetchMealById fucntion 
2) in second case we take the some information in the params like  mealtype, meal so take data from the dailymeal object where the data is present 
**/
export default function Custommeal() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const index = params.get('index');
    const days = params.get('days');
    const mealTypeForcustomMeal = params.get('mealTypeForcustomMeal');

    const dispatch = useDispatch();
    const meal = useSelector(selectMeal);
    const otherDataSize = meal?.otherData?.length - 1;
    const requestStatus = useSelector(selectDietAndMealApiMessage);
    const meals = useSelector(selectFitness);
    useEffect(() => {
        if (requestStatus.success) {
            // successPop(requestStatus.success)
            dispatch(clearDietAndMealApiMessage());
            return;
        }
        errorPop(requestStatus.error)
        dispatch(clearDietAndMealApiMessage());
    }, [requestStatus])

    // FETCH THE MEAL BY MEAL ID
    useEffect(() => {
        if (requestStatus.success) {
            dispatch(showCustomMeals(meals[mealTypeForcustomMeal][index]))
            dispatch(clearDietAndMealApiMessage());
        }
        return
    }, [requestStatus]);

    useEffect(() => {
        const date = getPreviousDate(days);
        dispatch(fetchDailyFitnessAndMealsDataAsync({ date }));
    }, [])
    return (
        <main className='h-[100dvh] w-full flex pl-[180px] max-md:pl-0 max-md:pt-[65px] relative overflow-hidden'>
            <TostifyPop />
            <Navbar />
            <Leftsidebar />
            <section className='px-20 h-[100dvh] py-24 max-md:p-8 flex flex-col w-full overflow-y-scroll max-md:pb-[70px]'>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-row gap-10 max-md:flex-col w-full'>
                        <img className='rounded-xl shadow-md border min-w-[300px] aspect-square' src={meal?.images ? baseUrl + meal?.images : imageBreakIcon} alt='meal' width={300} />
                        <div className='flex flex-col justify-between w-full'>
                            <div className='w-full'>
                                <h1 className='font-heading text-5xl font-bold text-black leading-20 '>{meal?.name} </h1>
                                <p className='font-body text-3xl font-normal leading-10 mt-4 w-[400px] max-md:w-full'>{meal?.description} </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* nuitritions */}
                <div className='mt-16 p-8  flex flex-col gap-6 border shadow-lg'>
                    {nutrientsArrayFilter(meal?.nutrients)?.map(({ name, value }, index) => (
                        <div className={`flex justify-between ${" border-b"}`} key={index}>
                            <p className='font-body text-3xl font-normal leading-8'> {name}</p>
                            <p className='font-body text-3xl font-normal leading-10'>{value.toFixed(0)} {name == 'calories' ? 'cal' : 'g'}</p>
                        </div>
                    ))}
                </div>

                {/* Additional information */}
                <div className='mt-16 p-8  flex flex-col gap-6 border shadow-lg '>
                    {meal?.otherData?.map((data, index) => (
                        <div key={index} className={`flex flex-row justify-between w-full px-4 ${index != otherDataSize ? " border-b border-black pb-4" : ''}`}>
                            <p className='w-full font-body text-3xl font-normal leading-8'>{data?.name}</p>
                            <div className={`w-full flex flex-row gap-3 `}> {data?.value?.map((val, index) => (
                                <p key={index} className='font-body text-3xl font-normal leading-8'>{val},</p>
                            ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </main >
    )
}


const nutrientsArrayFilter = (nutrients) => Object.keys(nutrients).map(key => ({
    name: key,
    value: nutrients[key]
}))
