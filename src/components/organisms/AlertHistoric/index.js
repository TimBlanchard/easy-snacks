import React from 'react'
import './index.scss'
import HeaderBox from "../../molecules/HeaderBox";
import Alert from "../Alert";

export default function AlertHistoric({alerts}) {
    return (
        <>
        {alerts.length > 0 &&
        <div className="alert-historic box-default">
            {console.log(alerts)}
            <HeaderBox title="Historique des alertes" montant={alerts.length} />
            {alerts.map((alert) =>
                alert.type === "temperature" ?
                <Alert type="red" title={"#"+alert.id} description={alert.message} />
                :
                <Alert type="orange" title={"#"+alert.id} description={alert.message} />
            )}
        </div>
        }
        </>

    )
}
