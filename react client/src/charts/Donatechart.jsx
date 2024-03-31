import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Data, PolarChartFilter } from './data';
ChartJS.register(ArcElement, Tooltip, Legend);
const newData = PolarChartFilter(Data);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Most consumed meals',
        },
    },
};
export const data = {
    labels: newData.map(({ name }) => name.slice(0, 15) + '...'),
    datasets: [
        {
            label: 'Meal consumed',
            data: newData.map(({ occr }) => occr),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 0, 0, 0.5)',      // Red
                'rgba(0, 128, 0, 0.5)',      // Green
                'rgba(0, 0, 255, 0.5)',      // Blue
                'rgba(255, 255, 0, 0.5)',    // Yellow
                'rgba(255, 0, 255, 0.5)',    // Magenta
                'rgba(0, 255, 255, 0.5)',    // Cyan
                'rgba(128, 0, 128, 0.5)',    // Purple
                'rgba(255, 165, 0, 0.5)',    // Orange
                'rgba(0, 255, 0, 0.5)',      // Lime
                'rgba(0, 0, 128, 0.5)',      // Navy
                'rgba(128, 128, 128, 0.5)',  // Gray
                'rgba(128, 0, 0, 0.5)',      // Maroon
                'rgba(128, 128, 0, 0.5)',    // Olive
                'rgba(0, 128, 128, .5)',    // Teal
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 0, 0, 1)',      // Red
                'rgba(0, 128, 0, 1)',      // Green
                'rgba(0, 0, 255, 1)',      // Blue
                'rgba(255, 255, 0, 1)',    // Yellow
                'rgba(255, 0, 255, 1)',    // Magenta
                'rgba(0, 255, 255, 1)',    // Cyan
                'rgba(128, 0, 128, 1)',    // Purple
                'rgba(255, 165, 0, 1)',    // Orange
                'rgba(0, 255, 0, 1)',      // Lime
                'rgba(0, 0, 128, 1)',      // Navy
                'rgba(128, 128, 128, 1)',  // Gray
                'rgba(128, 0, 0, 1)',      // Maroon
                'rgba(128, 128, 0, 1)',    // Olive
                'rgba(0, 128, 128, 1)',    // Teal
            ],
            borderWidth: 2,
        },
    ],
};

export function Donatechart() {
    return <Doughnut data={data} options={options} className='bg-white shadow-2xl' />;
}
