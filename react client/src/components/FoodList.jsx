
import { testMealImage } from '../assets'
import React from 'react'
import { Link } from 'react-router-dom';



const FoodList = ({ data, title, removebutton, handleRemoveButton }) => {
  const newTitile = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <>
      <h2 className='font-heading font-bold text-xl mt-8'>{newTitile}</h2>
      <div className='w-full border bg-white px-8 py-8 rounded-lg flex overflow-x-scroll gap-3  min-h-[200px]'>
        {data.map(({ image, _id, name, description }, index) => (
          <Link key={index} to={'/meal/' + _id} className={` shadow w-min text-center  border rounded-md  overflow-hidden relative`} >
            <div className='w-48 h-32'>
              <img src={testMealImage} className='w-full h-full object-cover' alt={name + 'image'} />
            </div>
            <div className='py-1 px-1'>
              <h4 className='font-heading text-lg font-bold'>{name.slice(0, 14) + '..'}</h4>
              <p className='font-body text-gray-700 '>{description.slice(0, 30) + '..'}</p>
            </div>

            {removebutton && <button onClick={(e) => { handleRemoveButton(e, { index, name, description, mealType: title }) }} className='bg-customgreen absolute top-0 right-0 text-white px-3 py-1.5 rounded-md '>Remove</button>}
          </Link>
        ))}
      </div>
    </>

  )
}

export default FoodList;