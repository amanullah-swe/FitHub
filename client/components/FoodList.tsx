
import { testMealImage } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface FoodItem {
    _id: number;
    name: string;
    description: string;
    image: string;
  }
  
  // Define the Props interface for the FoodList component
  interface FoodListProps {
    data: FoodItem[];
    title:string;
  }

  const FoodList: React.FC<FoodListProps>=({data,title})=> {
  return (
    <div className=' w-full mt-10'>
            <h2 className=' font-heading text-3xl m-2'>{title}</h2>
            {data.map(({ image, _id, name, description }, index) => (
              <Link href={'meal/' + _id} className={`flex gap-4  border rounded-lg px-4 py-2 shadow-lg ${index != 0 && 'mt-5'}`} >
                <Image src={testMealImage} className=' rounded-lg shadow-md w-20 h-14' alt={name + 'image'} />
                <div className=''>
                  <h4 className='font-heading text-2xl font-bold leading-6'>{name}</h4>
                  <p className='font-body text-sm leading-5 mt-2'>{description.slice(0,60)+' ...'}</p>
                </div>
              </Link>
            ))}
          </div>
  )
}

export default FoodList;