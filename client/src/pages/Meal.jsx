import React from 'react';
import { testMealImage } from '../assets'
import Leftsidebar from '../components/Leftsidebar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPreviousDate } from '../helpers/getPrevioudDate';
import { useDispatch, useSelector } from 'react-redux';
import { addDailyFitnessAndMealsDataAsync, clearDietAndMealApiMessage, selectDietAndMealApiMessage } from '../features/fitnesAndDiet/fitnessAndDietSlice';
import { calculateNutrients, fetchMelaByIdAsync, selectCalculatedNutrients, selectMeal } from '../features/meal/mealSlice';
import { baseUrl } from '../app/constant';
import TostifyPop, { errorPop, successPop } from '../components/TostifyPop';


export default function Meal() {
    const params = useParams();
    const dispatch = useDispatch();
    const meal = useSelector(selectMeal);
    const otherDataSize = meal.otherData.length - 1;
    const calculatedNutrients = useSelector(selectCalculatedNutrients);
    const [mealType, setmealType] = useState('breakfast');
    const [unite, setUnite] = useState(100);
    const [serving, setServing] = useState(1);
    const requestStatus = useSelector(selectDietAndMealApiMessage);
    useEffect(() => {
        if (requestStatus.success) {
            console.log(requestStatus);
            successPop(requestStatus.success)
            dispatch(clearDietAndMealApiMessage());
            return;
        }
        console.log(requestStatus.error);
        errorPop(requestStatus.error)
        dispatch(clearDietAndMealApiMessage());
    }, [requestStatus])


    useEffect(() => {
        dispatch(fetchMelaByIdAsync({ id: params.id }))

    }, []);

    useEffect(() => {
        dispatch(calculateNutrients({ unite: unite, serving_size: serving }));
    }, [unite, serving])

    const handleAddMeal = (e) => {
        const tempMeal = {
            _id: meal._id,
            name: meal.name,
            description: meal.description,
            images: meal.images,
            nutrients: calculatedNutrients,
        };
        const date = getPreviousDate();
        dispatch(addDailyFitnessAndMealsDataAsync({ meal: tempMeal, date, mealType }));
    }
    return (
        <main className='h-screen w-full flex pl-[180px] max-md:pl-0'>
            <TostifyPop />
            <Leftsidebar />
            <section className='px-20 h-[100dvh] py-24 max-md:p-8 flex flex-col w-full overflow-y-scroll max-md:pb-[70px] relative'>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-row gap-10 max-md:flex-col w-full'>
                        <img className='rounded-xl shadow-md border min-w-[300px] aspect-square' src={baseUrl + meal?.images} alt='meal' width={300} />
                        <div className='flex flex-col justify-between w-full'>
                            <div className='w-full'>
                                <h1 className='font-heading text-5xl font-bold text-black leading-20 '>{meal?.name} </h1>
                                <p className='font-body text-3xl font-normal leading-10 mt-4 w-[400px] max-md:w-full'>{meal?.description} </p>
                            </div>
                            <div className='flex flex-col gap-5 '>
                                <div className='flex gap-6'>
                                    <input type="number" className=' h-16 w-56 outline-none text-center shadow-md' name="unit" autocomplete="off" value={unite} id="" onChange={(e) => { setUnite(e.target.value) }} />
                                    <select name="serving" id="" className='h-16 w-56 px-4 text-left text-3xl font-normal leading-8 font-body outline-none shadow-md' value={serving} onChange={(e) => { setServing(e.target.value) }}>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4 ' value={meal?.serving_sizes?.grams}>grams</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4 ' value={meal.serving_sizes.cups}>cups</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4 ' value={meal.serving_sizes.ounces}>ounces</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4 ' value={meal.serving_sizes.teaspoons}>teaspoons</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4 ' value={meal.serving_sizes.tablespoons}>tablespoons</option>

                                    </select>
                                </div>
                                <div className=' flex gap-6 h-min'>
                                    <select id="" className='h-16 w-56 px-4 text-left text-3xl font-normal leading-8 font-body outline-none shadow-md' value={mealType} onChange={(e) => { setmealType(e.target.value) }} >
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'breakfast'} >Break fast</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'lunch'}>Lunch</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'dinner'}>Dinner</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'snackAm'}>Snack am</option>
                                        <option className='text-3xl font-normal leading-8 font-body px-4 py-4 my-4' value={'snackPm'}>Snack pm</option>

                                    </select>
                                    <button onClick={handleAddMeal} className='bg-customgreen w-16 h-16 flex justify-center items-center text-white text-5xl rounded-full shadow'>+</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* nuitritions */}
                <div className='mt-16 p-8  flex flex-col gap-6 border shadow-lg'>
                    {nutrientsArrayFilter(calculatedNutrients)?.map(({ name, value }, index) => (
                        <div className={`flex justify-between ${" border-b"}`} key={index}>
                            <p className='font-body text-3xl font-normal leading-8'> {name}</p>
                            <p className='font-body text-3xl font-normal leading-10'>{value.toFixed(0)} {name == 'calories' ? 'cal' : 'g'}</p>
                        </div>
                    ))}
                </div>

                {/* Additional information */}
                <div className='mt-16 p-8  flex flex-col gap-6 border shadow-lg '>
                    {meal.otherData.map((data, index) => (
                        <div key={index} className={`flex flex-row justify-between w-full px-4 ${index != otherDataSize ? " border-b border-black pb-4" : ''}`}>
                            <p className='w-full font-body text-3xl font-normal leading-8'>{data.name}</p>
                            <div className={`w-full flex flex-row gap-3 `}> {data.value.map((val, index) => (
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
}));