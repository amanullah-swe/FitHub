import React, { useEffect } from 'react'
import Barchart from '../charts/Barchart.jsx'
import { Donatechart } from '../charts/Donatechart.jsx'
import Leftsidebar from '../components/Leftsidebar.jsx'
import Linechart from '../charts/Linechart.jsx'
import Linechartcalories from '../charts/LineChart(calories).jsx'
import Linechartcaloriesburn from '../charts/Linechart(caloriesburn).jsx'
import Navbar from '../components/Navbar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { dashboardData, selectDashboardData } from '../features/fitnesAndDiet/fitnessAndDietSlice.js'


function Dashbaord() {
    const dispatch = useDispatch();
    const data = useSelector(selectDashboardData);
    useEffect(() => {
        dispatch(dashboardData());
    }, [])

    return (
        <div className='w-full flex bg-offwhite h-[100dvh] relative pl-[180px] max-md:pl-0 max-md:pt-[50px]' data-container>
            <Navbar />
            <Leftsidebar />
            <div className='flex flex-grow flex-col gap-10 overflow-auto px-20 pt-32 pb-40 max-md:pb-[70px] max-md:px-5 scroll-smooth'>
                <h1 className=' font-heading self-center text-6xl text-customgreen font-bold leading-10 shadow px-4 py-2  bg-offwhite '>Dashboard</h1>
                <div className='w-full flex gap-10 max-lg:flex-col'>
                    <div className='w-full flex flex-col gap-10 '>
                        <Linechartcalories dashboardData={data} />
                        <Linechartcaloriesburn dashboardData={data} />
                    </div>
                    <div className='w-full'>
                        <Donatechart dashboardData={data} />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-10 max-lg:flex-col '>
                    <Barchart dashboardData={data} />
                    <Linechart dashboardData={data} />
                </div>
            </div>
        </div >
    )
}

export default Dashbaord