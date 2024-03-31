import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Data, PolarChartFilter, barCharFilter } from './data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
            text: 'Micro nutrients',
        },
    },
};

const labels = newData.map(({ date }) => date);
console.log(labels);
export const data = {
    labels,
    datasets: [
        {
            label: 'cholesterol (mg)',
            data: newData.map(({ cholesterol }) => cholesterol),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'sugar (g)',
            data: newData.map(({ sugar }) => sugar),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function Linechart() {
    return <Line options={options} data={data} className='bg-white shadow-2xl' />;
}
