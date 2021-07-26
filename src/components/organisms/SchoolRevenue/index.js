import React from 'react'
import {Line} from 'react-chartjs-2';
import './index.scss'
import HeaderBox from '../../molecules/HeaderBox/'

export default function SchoolRevenue() {
    const data = {
        labels: ['L', 'M', 'M', 'J', 'V', 'S'],
        datasets: [
            {
                data: [100, 200, 750, 770, 1000, 1100, 1100],
                fill: false,
                backgroundColor: '#8C60FE',
                borderColor: '#8C60FE',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        plugins : {
            legend: {
                display: false,
            }
        }
    };

    return (
        <div className="school-revenue box-default">
            <HeaderBox title="Revenus de l'école" montant="1048€" />
            <Line data={data} options={options}/>
        </div>
    )
}
