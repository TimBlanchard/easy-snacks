import React from 'react'
import './index.scss'

export default function HeaderBox({title, montant}) {
    return (
        <div className="header-box">
            <div>
                <h2 className="titleBox">{ title }</h2>
                <span className="header-box__period">7 derniers jours</span>
            </div>
            <p className="header-box__montant">{ montant }</p>
        </div>
    )
}
