import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { barCharFilter } from './data';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function Barchart({ dashboardData }) {
    const newData = barCharFilter(dashboardData);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Nutrients',
            },
        },
    };

    const labels = newData.map(({ date }) => date);
    const data = {
        labels,
        datasets: [
            {
                label: 'Carbs (g)',
                data: newData.map(({ carbohydrates }) => carbohydrates),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Protein (g)',
                data: newData.map(({ protein }) => protein),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'fat (g)',
                data: newData.map(({ fat }) => fat),
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data} className='bg-white w-full shadow-xl rounded-3xl p-4' />;
}
