import React, { useEffect, useState } from 'react'
import FoodList from '../components/FoodList.jsx';
import Leftsidebar from '../components/Leftsidebar.jsx'
import { RemoveMealFromDailyFitnessAndMealsDataAsync, caloriesGoal, clearDietAndMealApiMessage, fetchDailyFitnessAndMealsDataAsync, proteinGoal, removeWorkout, selectDate, selectDietAndMealApiMessage, selectDocumentId, selectFitness, selectHomeError, selectTotalnutrients, selectWorkouts, weight, } from '../features/fitnesAndDiet/fitnessAndDietSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getPreviousDate } from '../helpers/getPrevioudDate.js';
import TostifyPop, { errorPop, successPop } from '../components/TostifyPop.jsx';
import Navebar from '../components/Navbar.jsx'
import Caloreisburncalculator from '../components/caloriesburncalculator.jsx';
import Workoutlist from '../components/Workoutlist.jsx';
function page() {
    const dispatch = useDispatch();
    const meals = useSelector(selectFitness);
    const totalnutrients = useSelector(selectTotalnutrients);
    const date = useSelector(selectDate);
    const docId = useSelector(selectDocumentId);
    const [days, setDays] = useState(0);
    const setcalories = useSelector(caloriesGoal);
    const setProtien = useSelector(proteinGoal);
    const setweight = useSelector(weight);
    console.log(setcalories, setProtien, setweight)
    const requestStatus = useSelector(selectDietAndMealApiMessage);
    const workouts = useSelector(selectWorkouts);
    useEffect(() => {
        const date = getPreviousDate(days);
        dispatch(fetchDailyFitnessAndMealsDataAsync({ date }));
    }, [days])


    const handleRemoveButton = (e, { index, name, mealType }) => {
        e.preventDefault();
        e.stopPropagation();
        const meal = meals[mealType][index];
        dispatch(RemoveMealFromDailyFitnessAndMealsDataAsync({ name, docId, index, mealType, meal }));
    }
    useEffect(() => {
        if (requestStatus.success) {
            // successPop(requestStatus.success)
            dispatch(clearDietAndMealApiMessage());
            return;
        }
        errorPop(requestStatus.error)
        dispatch(clearDietAndMealApiMessage());
    }, [requestStatus])

    function handleRemoveWorkout(e, workoutId, caloriesBurned) {
        const workout = {
            _id: workoutId,
            date: getPreviousDate(),
            docId,
            caloriesBurned
        }
        dispatch(removeWorkout(workout));
    }
    return (
        <div className='h-[100dvh] flex flex-row bg-offwhite pl-[180px] max-md:px-0 max-md:pt-[60px] overflow-hidden relative'>
            <TostifyPop />
            <Navebar />
            <Leftsidebar />
            <div className='px-10 py-5 flex flex-col  w-full max-md:pb-[60px] max-md:px-4'  >
                {/* date and all  */}
                <div className='w-full flex flex-col border rounded-lg bg-white py-1.3'>

                    {/* date toogle */}
                    <div className='w-full flex justify-between max-w-[800px] self-center items-center py-3 bg-customgreen rounded-lg text-white'>
                        <button className='text-4xl ml-4' onClick={() => setDays((prev) => prev + 1)}>&lt;</button>
                        <p className=' font-heading text-3xl'>{date}</p>
                        <button className='text-4xl mr-4' onClick={() => setDays((prev) => days < 0 ? 0 : prev - 1)} >&gt;</button>
                    </div>
                    <div className='flex w-full justify-evenly mt-10 h-48 max-md:h-32'>
                        <ProgressBar value={Math.floor(totalnutrients.protein)} totalvalue={setProtien} title='Protien' />
                        <ProgressBar value={Math.floor(totalnutrients.calories)} totalvalue={setcalories} title='calories' />
                    </div>
                </div>
                <div className=' w-full overflow-y-scroll'>
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={date == getPreviousDate()} days={days} data={meals.breakfast} title='breakfast' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={date == getPreviousDate()} days={days} data={meals.lunch} title='lunch' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={date == getPreviousDate()} days={days} data={meals.dinner} title='dinner' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={date == getPreviousDate()} days={days} data={meals.snackAm} title='snackAm' />
                    <FoodList handleRemoveButton={handleRemoveButton} removebutton={date == getPreviousDate()} days={days} data={meals.snackPm} title='snackPm' />
                    <Workoutlist handleRemoveButton={handleRemoveWorkout} removebutton={date == getPreviousDate()} data={workouts} />
                    <Caloreisburncalculator weight={setweight} />
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