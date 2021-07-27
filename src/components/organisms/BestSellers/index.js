import React from 'react'
import './index.scss'
import SingleSeller from "../../molecules/SingleSeller";

export default function BestSellers() {
    return (
        <div className="box-default best-sellers">
            <div className="header-box">
                <div>
                    <h2 className="titleBox">Meilleurs ventes</h2>
                    <span className="header-box__period">7 derniers jours</span>
                </div>
            </div>
            <SingleSeller id="1" product="Coca-Cola 33cl" sold="32" />
            <SingleSeller id="2" product="Coca-Cola 50cl" sold="24" />
            <SingleSeller id="3" product="Coca-Cola 18cl" sold="12" />
        </div>
    )
}
