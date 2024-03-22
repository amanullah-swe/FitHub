import React, { useEffect } from 'react'
import FoodList from '../components/FoodList.jsx';
import Leftsidebar from '../components/Leftsidebar.jsx'
import { RemoveMealFromDailyFitnessAndMealsDataAsync, fetchDailyFitnessAndMealsDataAsync, selectDate, selectDocumentId, selectFitness, selectTotalnutrients } from '../features/fitnesAndDiet/fitnessAndDietSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getPreviousDate } from '../helpers/getPrevioudDate.js';
function page() {

    const meals = useSelector(selectFitness);
    const dispatch = useDispatch();
    const totalnutrients = useSelector(selectTotalnutrients);
    const date = useSelector(selectDate);
    const docId = useSelector(selectDocumentId)
    const setcalories = 1300;
    const setProtien = 100;
    useEffect(() => {
        const date = getPreviousDate();
        dispatch(fetchDailyFitnessAndMealsDataAsync({ date, userId: "659f625a324792c0dc6f0d8d" }));
    }, [])


    const handleRemoveButton = (e, { index, name, mealType }) => {
        e.preventDefault();
        e.stopPropagation();
        const meal = meals[mealType][index];
        dispatch(RemoveMealFromDailyFitnessAndMealsDataAsync({ name, docId, index, mealType, meal }));

    }
    return (
        <div className='h-screen flex bg-offwhite'>
            <Leftsidebar />

            <div className='w-full px-10 py-5 flex flex-col' >
                {/* date and all  */}
                <div className='w-full flex flex-col border rounded-lg bg-white py-5'>
                    <div className='w-full flex justify-between max-w-3xl self-center items-center py-1.5 bg-customgreen rounded-lg text-white'>
                        <button className='text-xl ml-4'>&lt;</button>
                        <p className=' font-heading text-xl '>{date}</p>
                        <button className='text-xl mr-4'>&gt;</button>
                    </div>
                    <div className='flex w-full justify-evenly mt-10 h-20'>
                        <ProgressBar value={totalnutrients.protein} totalvalue={setProtien} title='Protien' />
                        <ProgressBar value={totalnutrients.calories} totalvalue={setcalories} title='calories' />
                    </div>
                </div>
                <div className='flex-grow overflow-y-scroll'>
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={true} data={meals.breakfast} title='breakfast' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={true} data={meals.lunch} title='lanch' />
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