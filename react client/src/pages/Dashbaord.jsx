import React from 'react'
import Barchart from '../charts/Barchart.jsx'
import { Donatechart } from '../charts/Donatechart.jsx'
import Leftsidebar from '../components/Leftsidebar.jsx'
import Linechart from '../charts/Linechart.jsx'
import Linechartcalories from '../charts/LineChart(calories).jsx'

function Dashbaord() {
    return (
        <div className='w-full flex bg-offwhite h-screen'>
            <Leftsidebar />
            <div className='flex flex-grow flex-col gap-10 overflow-auto px-20 pt-40'>
                <h1 className=' font-heading self-center text-6xl '>Dashboard</h1>
                <div className='w-full flex flex-row gap-10 bg-white'>
                    <div className='w-full '>
                        <Barchart />
                    </div>
                    <div className='w-full'>
                        <Linechart />
                    </div>
                </div>
                <div className='w-full flex gap-10'>
                    <div className='w-full flex flex-col gap-10 '>
                        <Linechartcalories />
                        <Linechartcalories />
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