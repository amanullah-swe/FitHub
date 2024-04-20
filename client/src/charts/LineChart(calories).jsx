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
            text: 'Calories intake',
        },
    },
};

const labels = newData.map(({ date }) => date);
export const data = {
    labels,
    datasets: [
        {
            label: 'calories (cal)',
            data: newData.map(({ calories }) => calories),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.5,

        },
    ],
};

export default function Linechartcalories() {
    return <Line options={options} data={data} className='bg-white w-full shadow-xl rounded-3xl p-4' />;
}
