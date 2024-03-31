import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { Data, PolarChartFilter } from './data';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const newData = PolarChartFilter(Data);

export const data = {
    labels: newData.map(({ name }) => name),
    datasets: [
        {
            label: 'meals consume',
            data: newData.map(({ occr }) => occr),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Polarchart() {
    return <PolarArea data={data} />;
}
