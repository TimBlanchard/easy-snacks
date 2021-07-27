import React from 'react'
import './index.scss'
import {Bar} from 'react-chartjs-2';

export default function HoursAffluence() {
    const data = {
        labels: ['07H', '08H', '09H', '10H', '11H', '12H', '13H', '14H', '15H', '16H', '17H', '18H', '19H'],
        datasets: [
            {
                label: '# of Votes',
                width: 10,
                data: [100, 200, 750, 770, 1000, 1100, 1100, 100, 200, 750, 770, 1000, 750],
                fill: false,
                backgroundColor: '#8C60FE',
                borderColor: '#8C60FE',
                barPercentage: 0.5,
                barThickness: 12,
                maxBarThickness: 12,
                borderRadius: 10
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    return (
        <div className="box-default hours-affluence">
            <div className="header-box">
                <div>
                    <h2 className="titleBox">Horaires d'affluence</h2>
                </div>
            </div>
            <Bar data={data} options={options}/>
        </div>
    )
}
