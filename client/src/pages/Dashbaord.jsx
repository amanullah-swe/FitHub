import React from 'react'
import Barchart from '../charts/Barchart.jsx'
import { Donatechart } from '../charts/Donatechart.jsx'
import Leftsidebar from '../components/Leftsidebar.jsx'
import Linechart from '../charts/Linechart.jsx'
import Linechartcalories from '../charts/LineChart(calories).jsx'
import Linechartcaloriesburn from '../charts/Linechart(caloriesburn).jsx'


function Dashbaord() {
    return (
        <div className='w-full flex bg-offwhite h-[100dvh] relative pl-[180px] max-md:pl-0' data-container>
            <Leftsidebar />
            <div className='flex flex-grow flex-col gap-10 overflow-auto px-20 pt-32 pb-40 max-md:pb-[115px] max-md:px-5 scroll-smooth'>
                <h1 className=' font-heading self-center text-6xl text-customgreen font-bold leading-10 shadow px-4 py-2  bg-offwhite '>Dashboard</h1>
                <div className='w-full flex flex-row gap-10 max-md:flex-col '>
                    <div className='w-full '>
                        <Barchart />
                    </div>
                    <div className='w-full'>
                        <Linechart />
                    </div>
                </div>
                <div className='w-full flex gap-10 max-md:flex-col'>
                    <div className='w-full flex flex-col gap-10 '>
                        <Linechartcalories />
                        <Linechartcaloriesburn />
                    </div>
                    <div className='w-full'>
                        <Donatechart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbaord