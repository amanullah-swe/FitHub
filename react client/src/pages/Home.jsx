import React, { useEffect, useState } from 'react'
import FoodList from '../components/FoodList.jsx';
import Leftsidebar from '../components/Leftsidebar.jsx'
import { RemoveMealFromDailyFitnessAndMealsDataAsync, fetchDailyFitnessAndMealsDataAsync, selectDate, selectDocumentId, selectFitness, selectHomeError, selectTotalnutrients } from '../features/fitnesAndDiet/fitnessAndDietSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getPreviousDate } from '../helpers/getPrevioudDate.js';
function page() {
    const windowWidth = window.innerWidth - 180;
    const dispatch = useDispatch();
    const meals = useSelector(selectFitness);
    const totalnutrients = useSelector(selectTotalnutrients);
    const date = useSelector(selectDate);
    const docId = useSelector(selectDocumentId);
    const [days, setDays] = useState(0);
    const setcalories = 1300;
    const setProtien = 100;

    useEffect(() => {
        const date = getPreviousDate(days);
        dispatch(fetchDailyFitnessAndMealsDataAsync({ date }));
    }, [days])


    const handleRemoveButton = (e, { index, name, mealType }) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(mealType, index);

        const meal = meals[mealType][index];
        console.log(meal)
        dispatch(RemoveMealFromDailyFitnessAndMealsDataAsync({ name, docId, index, mealType, meal }));

    }
    return (
        <div className='h-screen flex flex-row bg-offwhite overflow-hidden'>
            <Leftsidebar />

            <div className='px-10 py-5 flex flex-col food-list-container' style={{ width: windowWidth }} >
                {/* date and all  */}
                <div className='w-full flex flex-col border rounded-lg bg-white py-1.3'>

                    {/* date toogle */}
                    <div className='w-full flex justify-between max-w-[800px] self-center items-center py-3 bg-customgreen rounded-lg text-white'>
                        <button className='text-4xl ml-4' onClick={() => setDays((prev) => prev + 1)}>&lt;</button>
                        <p className=' font-heading text-3xl'>{date}</p>
                        <button className='text-4xl mr-4' onClick={() => setDays((prev) => prev - 1)} >&gt;</button>
                    </div>
                    <div className='flex w-full justify-evenly mt-10 h-48'>
                        <ProgressBar value={Math.floor(totalnutrients.protein)} totalvalue={setProtien} title='Protien' />
                        <ProgressBar value={Math.floor(totalnutrients.calories)} totalvalue={setcalories} title='calories' />
                    </div>
                </div>
                <div className=' w-full overflow-y-scroll'>
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={true} data={meals.breakfast} title='breakfast' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={true} data={meals.lunch} title='lunch' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={true} data={meals.dinner} title='dinner' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={true} data={meals.snackAm} title='snackAm' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={true} data={meals.snackPm} title='snackPm' />
                </div>
            </div>

        </div>
    )
}

export default page;


const ProgressBar = ({ value, totalvalue, title }) => {
    const persentage = (value / totalvalue) * 100;
    return (
        <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': persentage }}>
            <div className="progress-bar__fill"></div>
            <div className=" absolute top-[50%] progress-percentage">{value}/{totalvalue}</div>
            <p>{title}</p>
        </div>
    );
}