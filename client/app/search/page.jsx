'use client';
import { testMealImage } from '@/assets';
import FoodList from '@/components/FoodList';
import Leftsidebar from '@/components/Leftsidebar'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

// const dataArray = [
//     {
//         "id": 1,
//         "name": "Pizza",
//         "description": "Delicious Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients.",
//         "image": "https://via.placeholder.com/300"
//     },
//     {
//         "id": 2,
//         "name": "Sushi",
//         "description": "Traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients such as seafood, vegetables, and occasionally tropical fruits.",
//         "image": "https://via.placeholder.com/300"
//     },
//     {
//         "id": 3,
//         "name": "Burger",
//         "description": "Popular American fast food consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun, often accompanied by various toppings.",
//         "image": "https://via.placeholder.com/300"
//     },
//     {
//         "id": 4,
//         "name": "Tacos",
//         "description": "Traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling, typically made of various meats, vegetables, and condiments.",
//         "image": "https://via.placeholder.com/300"
//     },
//     {
//         "id": 5,
//         "name": "Pasta",
//         "description": "Traditional Italian cuisine comprising a variety of noodle-shaped forms, usually made from unleavened dough of durum wheat flour, combined with sauces and ingredients.",
//         "image": "https://via.placeholder.com/300"
//     },
//     {
//         "id": 6,
//         "name": "Sushi Rolls",
//         "description": "Variation of sushi where ingredients are rolled inside a sheet of nori seaweed and vinegared rice. Common fillings include fish, seafood, vegetables, and avocado.",
//         "image": "https://via.placeholder.com/300"
//     }
// ];
function Search() {

    const [dataArray, setdataArray] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    const handleSubmite = async (e) => {
        e.preventDefault()
        e.stopPropagation();
        if (!searchValue) return;
        const reponese = await fetch('http://localhost:8080/api/meal/' + searchValue);
        const data = await reponese.json();
        setdataArray(data);
        console.log(data)
    }
    return (
        <div className='w-full h-screen flex'>
            <Leftsidebar />

            <div className='w-full py-10 flex flex-col '>
                <form action="" className=' sticky w-full px-10 top-10 bg-white' onSubmit={handleSubmite}>
                    <div className='flex h-12 rounded-lg  border border-black w-full'>
                        <input
                            type="text"
                            name="" id=""
                            className=' w-full rounded-lg px-10 outline-none font-body text-base'
                            placeholder='search'
                            value={searchValue}
                            onChange={(e) => { setSearchValue(e.target.value) }} />
                        <input type="submit" placeholder='Search' value={"search"} className='border-l border-black text-center w-20 rounded-lg outline-none' />
                    </div>
                </form>


                {/*show result  */}
                <div className='w-full mt-10 px-5  flex-grow'>
                    <FoodList title='Results' data={dataArray} />

                </div>
            </div>
        </div>
    )
}

export default page