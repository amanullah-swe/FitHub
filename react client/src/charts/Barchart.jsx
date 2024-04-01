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
import { Data, barCharFilter } from './data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const newData = barCharFilter(Data);
export const options = {
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
export const data = {
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

export default function Barchart() {
    return <Bar options={options} data={data} className='bg-white shadow-xl rounded-3xl p-4' />;
}
