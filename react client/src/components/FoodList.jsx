
import { testMealImage } from '../assets'
import React from 'react'
import { Link } from 'react-router-dom';



const FoodList = ({ data, title, removebutton, handleRemoveButton }) => {
  const newTitile = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <>
      <div className='w-full flex justify-between items-center pr-8 mt-5'><h2 className='font-heading font-bold text-6xl mt-8 text-black'>{newTitile}</h2>{removebutton && <Link to={'/search'} className='bg-customgreen w-16 h-16 flex justify-center items-center text-white text-5xl rounded-full shadow'>+</Link>}</div>
      <div className='w-full border bg-white px-10 py-12 rounded-lg flex gap-12 flex-row overflow-x-scroll p-3 min-h-[300px] max-md:min-h-[240px]'>
        {data.map(({ images, _id, name, description }, index) => (
          <Link key={index} to={'/meal/' + _id} className={` shadow w-min text-center  border rounded-xl relative `} >
            <div className='w-[260px] h-[200px] max-md:w-[180px] max-md:h-[150px] rounded-xl overflow-hidden'>
              <img src={"http://localhost:8080" + images} className='w-full h-full object-cover' alt={name + 'image'} />
            </div>
            <div className='py-2 px-2'>
              <h4 className='font-heading text-4xl font-bold text-black'>{name.slice(0, 20) + '..'}</h4>
              <p className='font-body text-gray-700 text-2xl '>{description.slice(0, 50) + '..'}</p>
            </div>
            {removebutton && <button onClick={(e) => { handleRemoveButton(e, { index, name, description, mealType: title }) }} className='bg-customgreen absolute top-0 right-0 text-white px-3 py-1.5 rounded-md '>Remove</button>}
          </Link>
        ))}
      </div>
    </>

  )
}

export default FoodList;