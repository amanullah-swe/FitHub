import { testMealImage } from '@/assets';
import FoodList from '@/components/FoodList';
import Leftsidebar from '@/components/Leftsidebar'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

function page() {


  const dataArray = [
    {
      "id": 1,
      "name": "Pizza",
      "description": "Delicious Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients.",
      "image": "https://via.placeholder.com/300"
    },
    {
      "id": 2,
      "name": "Sushi",
      "description": "Traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients such as seafood, vegetables, and occasionally tropical fruits.",
      "image": "https://via.placeholder.com/300"
    },
    {
      "id": 3,
      "name": "Burger",
      "description": "Popular American fast food consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun, often accompanied by various toppings.",
      "image": "https://via.placeholder.com/300"
    },
  ];


  const setcalories = 1300;
  const setProtien = 100;

  return (
    <div className='h-screen flex'>
      <Leftsidebar />

      <div className='w-full h-full px-10 py-5 flex flex-col' >
        {/* date and all  */}
        <div className='w-full flex justify-between bg-gray-600 py-6 rounded-lg text-white'>
          <button className='text-3xl ml-4'>&lt;</button>
          <p className=' font-heading text-xl leading-7'>03/18/2024</p>
          <button className=' text-3xl mr-4'>&gt;</button>
        </div>
        <div className='flex w-full justify-evenly mt-10'>
        <div className=' w-40 h-40'>
          <ProgressBar value={71} totalvalue={200} title='Protien' />
        </div>
        <div className=' w-40 h-40'>
          <ProgressBar value={600} totalvalue={1300} title='calories' />
        </div>
        </div>
       
        <div className='flex-grow overflow-auto'>
          <FoodList data={dataArray} title='Breakfast' />
          <FoodList data={dataArray} title='Lanch' />
          <FoodList data={dataArray} title='Dinner' />
        </div>
      </div>
    </div>
  )
}

export default page;


const ProgressBar: React.FC<{ value: any, totalvalue:any, title:string }> = ({ value,totalvalue,title }) => {
  
  const persentage = (value/totalvalue)*100;
  return (
    <div className="progress-bar after:c" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': persentage }}>
      <div className="progress-bar__fill"></div>
      <div className=" absolute top-[50%] progress-percentage">{value}/{totalvalue}</div>
      <p>{title}</p>
    </div>
  );
}