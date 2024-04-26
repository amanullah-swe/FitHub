'use client';
import React, { useState } from 'react'
import { testMealImage } from '../assets';
import FoodList from '../components/FoodList.jsx';
import Leftsidebar from '../components/Leftsidebar.jsx'
import { baseUrl } from '../app/constant.js';
import Navbar from '../components/Navbar.jsx';

function Search() {
    let windowWidth = window.innerWidth - 180;
    const [dataArray, setdataArray] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const handleSubmite = async (e) => {
        e.preventDefault()
        e.stopPropagation();
        if (!searchValue) return;
        const reponese = await fetch(`${baseUrl}/api/meal/` + searchValue);
        const data = await reponese.json();
        setdataArray(data);
    }

    return (
        <div className='w-full h-[100dvh] flex  overflow-hidden relative pl-[180px] max-md:pl-0 max-md:pt-[60px]' >
            <Navbar />
            <Leftsidebar />
            <div className='flex-gow p-10 flex flex-col items-center w-full max-md:p-2'>
                <form action="" className=' sticky w-[90%]  top-20 bg-white shadow rounded-2xl' onSubmit={handleSubmite}>
                    <div className='flex h-24 rounded-2xl  border border-black w-full'>
                        <input
                            type="text"
                            name="" id=""
                            className=' w-full rounded-2xl px-10 outline-none font-body text-3xl'
                            placeholder='Type here'
                            value={searchValue}
                            onChange={(e) => { setSearchValue(e.target.value) }} />
                        <input
                            type="submit"
                            placeholder='Search'
                            value={"Search"}
                            className=' border-2 font-body text-3xl border-black text-center w-44 rounded-lg outline-none text-customgreen hover:bg-customgreen hover:text-white transition-[background-color,color] hover:cursor-pointer' />
                    </div>
                </form>


                {/*show result  */}
                <div className={'mt-20 px-5 w-full'}  >
                    <FoodList removebutton={false} title='Results' data={dataArray} />
                </div>
            </div>
        </div>
    )
}

export default Search;