'use client';
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface FinancialData {
    sector: string;
    value: number;
}

interface DonutChartProps {
    data: FinancialData[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
    const series = data.map(item => item.value);
    const labels = data.map(item => item.sector);

    const options: ApexOptions = {
        chart: {
            type: 'donut', // This should be a string literal
        },
        labels: labels,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <div>
            <Chart options={options} series={series} type="donut" width="380" />
        </div>
    );
};

export default DonutChart;
