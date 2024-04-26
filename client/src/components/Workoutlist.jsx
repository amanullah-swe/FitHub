import React from 'react'

function Workoutlist({ data, removebutton, handleRemoveButton }) {
    return (
        <><div className='w-full flex justify-between items-center pr-8 mt-5'><h2 className='font-heading font-bold text-6xl mt-8 text-black'>Workouts</h2></div>
            <div className='w-full border bg-white px-10 py-8 items-center rounded-lg flex gap-12 flex-row overflow-x-scroll p-3  '>
                {data?.map(({ name, intensity, duration, caloriesBurned, _id }) => (
                    <div className='shadow px-12 py-12 min-w-min text-center border rounded-xl relative'>
                        <h3 className='min-w-[200px] font-heading text-4xl font-bold text-black'>{name}</h3>
                        <ul className=' text-left mt-4'>
                            <li className='font-body text-gray-700 text-2xl '>Intensity: {intensity}</li>
                            <li className='font-body text-gray-700 text-2xl '>Duration: {duration} minutes</li>
                            <li className='font-body text-gray-700 text-2xl '>Calories Burned: {caloriesBurned}</li>
                        </ul>
                        {removebutton && <button onClick={(e) => handleRemoveButton(e, _id, caloriesBurned)} className='bg-customgreen absolute top-0 right-0 text-white px-3 py-1.5 rounded-md '>Remove</button>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Workoutlist