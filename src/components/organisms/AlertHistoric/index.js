import React from 'react'
import './index.scss'
import HeaderBox from "../../molecules/HeaderBox";
import Alert from "../Alert";

export default function AlertHistoric() {
    return (
        <div className="alert-historic box-default">
            <HeaderBox title="Historique des alertes" montant="3" />
            <Alert />
        </div>
    )
}
