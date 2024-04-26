import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../features/fitnesAndDiet/fitnessAndDietSlice';
import { getPreviousDate } from '../helpers/getPrevioudDate';

// Data for exercises and their intensity levels with MET values
const exercises = [
    {
        name: "Walking",
        intensityLevels: [
            { intensity: "Slow (2 mph)", metValue: 3.0 },
            { intensity: "Brisk (3.5 mph)", metValue: 5.0 },
        ],
    },
    {
        name: "Running",
        intensityLevels: [
            { intensity: "Slow (6 mph)", metValue: 6.0 },
            { intensity: "Moderate (8 mph)", metValue: 8.0 },
            { intensity: "Fast (10 mph+)", metValue: 9.0 },
        ],
    },
    {
        name: "Swimming",
        intensityLevels: [
            { intensity: "Leisurely", metValue: 6.0 },
            { intensity: "Freestyle, moderate pace", metValue: 8.0 },
        ],
    },
    {
        name: "Cycling",
        intensityLevels: [
            { intensity: "Moderate (12-14 mph)", metValue: 8.0 },
            { intensity: "Vigorous (>16 mph)", metValue: 10.0 },
        ],
    },
    {
        name: "Stationary Biking",
        intensityLevels: [
            { intensity: "Moderate", metValue: 5.0 },
            { intensity: "Vigorous", metValue: 7.0 },
        ],
    },
    {
        name: "Elliptical Trainer",
        intensityLevels: [
            { intensity: "Moderate Intensity", metValue: 6.0 },
            { intensity: "Varies depending on resistance", metValue: 7 },
        ],
    },
    {
        name: "Stair Climbing",
        intensityLevels: [
            { intensity: "Slow Pace", metValue: 4.0 },
            { intensity: "Fast Pace", metValue: 8.8 },
        ],
    },
    {
        name: "Strength Training",
        intensityLevels: [
            { intensity: "Low Intensity (bodyweight exercises)", metValue: 3.5 },
            { intensity: "Moderate Intensity (light weights)", metValue: 5.5 },
            { intensity: "High Intensity (heavy weights)", metValue: 7.5 },
        ],
    },
    {
        name: "Yoga",
        intensityLevels: [
            { intensity: "Hatha Yoga", metValue: 2.5 },
            { intensity: "Vinyasa Yoga", metValue: 4.5 },
        ],
    },
    {
        name: "Dancing",
        intensityLevels: [
            { intensity: "Ballroom Dancing", metValue: 3.5 },
            { intensity: "Aerobic Dance", metValue: 6.0 },
        ],
    },
];

function calculateCalories(duration, metValue, weight) {
    // Calculate calories burned per minute
    const caloriesPerMinute = (3.5 * metValue * weight) / 200;
    // Total calories burned
    const totalCaloriesBurned = caloriesPerMinute * duration;
    // Return the rounded value
    return Math.round(totalCaloriesBurned);
}

// React component for the exercise form
const Caloreisburncalculator = ({ weight }) => {
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [selectedIntensity, setSelectedIntensity] = useState(null);
    const [duration, setDuration] = useState(0);
    const dispatch = useDispatch();

    // Handler for exercise dropdown change
    const handleExerciseChange = (e) => {
        const exerciseName = e.target.value;
        const exercise = exercises.find((ex) => ex.name === exerciseName);
        setSelectedExercise(exercise);
        setSelectedIntensity(null); // Reset intensity when changing exercise
    };

    // Handler for intensity dropdown change
    const handleIntensityChange = (e) => {
        const intensity = selectedExercise.intensityLevels.find(
            (il) => il.intensity === e.target.value
        );
        setSelectedIntensity(intensity);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedExercise && selectedIntensity) {
            const workout = {
                name: selectedExercise.name,
                intensity: selectedIntensity.intensity,
                metValue: selectedIntensity.metValue,
                duration,
                date: getPreviousDate(),
                caloriesBurned: calculateCalories(duration, selectedIntensity.metValue, weight || 60)
            }
            console.log(workout, weight)
            dispatch(addWorkout(workout));
        } else {
            console.log("Please select an exercise and intensity.");
        }
    };

    return (
        <>
            <div className='w-full flex justify-between items-center pr-8 mt-5'><h2 className='font-heading font-bold text-6xl mt-8 text-black'>Add workout</h2></div>
            <form onSubmit={handleSubmit} className='w-full border bg-white px-10 py-12 rounded-lg flex gap-4 flex-row  p-3 max-lg:flex-col '>
                <div className='flex flex-row items-center gap-4'>
                    <label htmlFor="exercise">Select Exercise:</label>
                    <select
                        id="exercise"
                        className='h-16 w-56 px-4 text-left text-3xl font-normal leading-8 font-body outline-none shadow-md'
                        onChange={handleExerciseChange}>
                        <option value="">-- Select --</option>
                        {exercises.map((ex) => (
                            <option key={ex.name} value={ex.name}>
                                {ex.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedExercise && (
                    <div className='flex flex-row items-center gap-4'>
                        <label htmlFor="intensity">Select Intensity:</label>
                        <select
                            id="intensity"
                            className='h-16 w-56 px-4 text-left text-3xl font-normal leading-8 font-body outline-none shadow-md'
                            onChange={handleIntensityChange}>
                            <option value="">-- Select --</option>
                            {selectedExercise.intensityLevels.map((il) => (
                                <option key={il.intensity} value={il.intensity}>
                                    {il.intensity}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {selectedIntensity && (
                    <div className='flex flex-row items-center gap-4'>
                        <label htmlFor="duration" >Duration (in minutes):</label>
                        <input type="number" className='h-16 w-56 outline-none text-center shadow-md' value={duration} onChange={(e) => setDuration(+e.target.value < 0 ? 0 : + e.target.value)} />

                        <button
                            type="submit"
                            className='bg-customgreen w-16 h-16 flex justify-center items-center text-white text-5xl rounded-full shadow'>
                            +
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Caloreisburncalculator
    ;
