import React from 'react'
import {Line} from 'react-chartjs-2';
import './index.scss'
import HeaderBox from '../../molecules/HeaderBox/'
import {randomNumberInterval} from "../../../services/network";

export default function SchoolRevenue() {
    const data = {
        labels: ['L', 'M', 'M', 'J', 'V', 'S'],
        datasets: [
            {
                data: [randomNumberInterval(200, 600), randomNumberInterval(200, 600), randomNumberInterval(200, 600), randomNumberInterval(200, 600), randomNumberInterval(200, 600), randomNumberInterval(200, 600), randomNumberInterval(200, 600)],
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
            <HeaderBox title="Revenus de l'école" montant={randomNumberInterval(600, 1500)+"€"} />
            <Line data={data} options={options}/>
        </div>
    )
}
