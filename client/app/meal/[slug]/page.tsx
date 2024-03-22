'use client'
import { testMealImage } from '@/assets'
import Leftsidebar from '@/components/Leftsidebar'
import { set } from 'mongoose'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


type Nutrients = {
  protein: number;
  calories: number;
  carbohydrates: number;
  fiber: number;
  fat: number;
  cholesterol: number;
};

type ServingSizes = {
  grams: number;
  cups: number;
  ounces: number;
  teaspoons: number;
  tablespoons: number;
};

type OtherDataItem = {
  name: string;
  value: string[];
};

type Meal = {
  name: string;
  description: string;
  images: string;
  nutrients: Nutrients;
  serving_sizes: ServingSizes;
  otherData: OtherDataItem[];
};

const defaultMeal: Meal = {
  name: "",
  description: "",
  images: "",
  nutrients: {
      protein: 0,
      calories: 0,
      carbohydrates: 0,
      fiber: 0,
      fat: 0,
      cholesterol: 0
  },
  serving_sizes: {
      grams: 0,
      cups: 0,
      ounces: 0,
      teaspoons: 0,
      tablespoons: 0
  },
  otherData: [
    { name: "Benefits", value: [] },
    { name: "category", value: [] },
    { name: "avoid", value: [] },
    { name: "warnings", value: [] },
    { name: "storage", value: [] },
    { name: "origin", value: [] },
    { name: "availability", value: [] },
    { name: "alternative_names", value: [] }
  ]
};


export default function Page({ params }: { params: { slug: string } }) {

  const [meal, setMeal] = useState<Meal>(defaultMeal);
    useEffect(()=>{
      async function dataFetching (){
          const response =await fetch('http://localhost:8080/api/meal/id/'+params.slug);
          const data = await  response.json();
          setMeal(data);
      }
      dataFetching();
    },[])
  return (
    <main className='h-screen w-full flex'>
      <Leftsidebar />

      <section className='px-6 py-12 flex flex-col w-full overflow-auto'>
        <div className='flex flex-row gap-5'>
          <Image className='rounded-sm shadow-md border p-2 ' src={testMealImage} alt='meal' width={300} />
          <div>
            <h1 className='font-heading text-2xl font-bold leading-6'>{meal?.name} </h1>
            <p className='font-body text-sm leading-5 mt-2 w-64'>{meal?.description} </p>
          </div>
        </div>

        {/* nuitritions */}
        <div className='mt-8 p-2 flex flex-col gap-3 border'>
          {nutrientsArrayFilter(meal.nutrients)?.map(({ name, value }, index) => (
            <div className={`flex justify-between ${index  && " border-b"}`}>
              <p className='font-body text-sm'> {name}</p>
              <p className='font-body text-sm'>{value} {name=='calories' ? 'cal' :'g'}</p>
            </div>
          ))}
        </div>

        {/* Additional information */}
        <div className='mt-8 w-full flex flex-col gap-4 border py-2'>
          {meal.otherData.map((data, index) => (
            <div className={`flex flex-row justify-between w-full px-2 ${index  && " border-b"}`}>
              <p className='w-full font-body text-sm'>{data.name}</p>
              <div className={`w-full flex flex-row gap-3 `}> {data.value.map((val) => (
                <p className='font-body text-sm'>{val},</p>
              ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  )
}



const nutrientsArrayFilter =(nutrients)=> Object.keys(nutrients).map(key => ({
  name: key,
  value: nutrients[key]
}));