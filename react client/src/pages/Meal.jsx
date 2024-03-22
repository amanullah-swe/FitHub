import React from 'react';
import { testMealImage } from '../assets'
import Leftsidebar from '../components/Leftsidebar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPreviousDate } from '../helpers/getPrevioudDate';
import { useDispatch, useSelector } from 'react-redux';
import { addDailyFitnessAndMealsDataAsync } from '../features/fitnesAndDiet/fitnessAndDietSlice';
import { calculateNutrients, fetchMelaByIdAsync, selectCalculatedNutrients, selectMeal } from '../features/meal/mealSlice';




export default function Meal() {
    const userId = "659f625a324792c0dc6f0d8d";
    const params = useParams();
    const dispatch = useDispatch();
    const meal = useSelector(selectMeal);
    const calculatedNutrients = useSelector(selectCalculatedNutrients);
    const [mealType, setmealType] = useState('breakfast');
    const [unite, setUnite] = useState(100);
    const [serving, setServing] = useState(1);



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
            image: meal.image,
            nutrients: calculatedNutrients,
        };
        const date = getPreviousDate();
        dispatch(addDailyFitnessAndMealsDataAsync({ meal: tempMeal, date, userId, mealType }));

    }
    return (
        <main className='h-screen w-full flex'>
            <Leftsidebar />
            <section className='px-6 py-12 flex flex-col w-full overflow-y-scroll'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-5'>
                        <img className='rounded-sm shadow-md border p-2 ' src={testMealImage} alt='meal' width={300} />
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className='font-heading text-2xl font-bold leading-6'>{meal?.name} </h1>
                                <p className='font-body text-sm leading-5 mt-2 w-64'>{meal?.description} </p>
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <div className='flex gap-3'>
                                    <input type="number" className=' h-8 w-28 outline-none text-center shadow-md' name="unit" autocomplete="off" value={unite} id="" onChange={(e) => { setUnite(e.target.value) }} />
                                    <select name="serving" id="" className='h-8 w-28 px-2 text-left text-sm font-body outline-none shadow-md' value={serving} onChange={(e) => { setServing(e.target.value) }}>
                                        <option className='text-sm font-body px-2 py-4 my-2 ' value={meal.serving_sizes.grams}>grams</option>
                                        <option className='text-sm font-body px-2 py-4 my-2 ' value={meal.serving_sizes.cups}>cups</option>
                                        <option className='text-sm font-body px-2 py-4 my-2 ' value={meal.serving_sizes.ounces}>ounces</option>
                                        <option className='text-sm font-body px-2 py-4 my-2 ' value={meal.serving_sizes.teaspoons}>teaspoons</option>
                                        <option className='text-sm font-body px-2 py-4 my-2 ' value={meal.serving_sizes.tablespoons}>tablespoons</option>

                                    </select>
                                </div>
                                <div className=' flex gap-3 h-min'>
                                    <select id="" className='h-8 w-28 px-2 text-left text-sm font-body outline-none shadow-md' value={mealType} onChange={(e) => { setmealType(e.target.value) }} >
                                        <option className='text-sm font-body px-2 py-4 my-2' value={'breakfast'} >Break fast</option>
                                        <option className='text-sm font-body px-2 py-4 my-2' value={'lunch'}>Lunch</option>
                                        <option className='text-sm font-body px-2 py-4 my-2' value={'dinner'}>Dinner</option>
                                        <option className='text-sm font-body px-2 py-4 my-2' value={'snackAm'}>Snack am</option>
                                        <option className='text-sm font-body px-2 py-4 my-2' value={'snackPm'}>Snack pm</option>

                                    </select>
                                    <button onClick={handleAddMeal} className='bg-customgreen w-8 h-8 flex justify-center items-center text-white text-md rounded-full shadow'>+</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* nuitritions */}
                <div className='mt-8 p-2 flex flex-col gap-3 border'>
                    {nutrientsArrayFilter(calculatedNutrients)?.map(({ name, value }, index) => (
                        <div className={`flex justify-between ${index && " border-b"}`} key={index}>
                            <p className='font-body text-sm'> {name}</p>
                            <p className='font-body text-sm'>{value} {name == 'calories' ? 'cal' : 'g'}</p>
                        </div>
                    ))}
                </div>

                {/* Additional information */}
                <div className='mt-8 w-full flex flex-col gap-4 border py-2'>
                    {meal.otherData.map((data, index) => (
                        <div key={index} className={`flex flex-row justify-between w-full px-2 ${index && " border-b"}`}>
                            <p className='w-full font-body text-sm'>{data.name}</p>
                            <div className={`w-full flex flex-row gap-3 `}> {data.value.map((val, index) => (
                                <p key={index} className='font-body text-sm'>{val},</p>
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