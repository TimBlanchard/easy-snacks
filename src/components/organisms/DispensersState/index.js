import React from 'react'
import './index.scss'
import IndicatorStateWithText from "../../molecules/IndicatorStateWithText";

export default function DispensersState() {

    return (
        <div className="dispensers-state">
            <IndicatorStateWithText warningState={'good'} text="214 fonctionnels"/>
            <IndicatorStateWithText warningState={'warning'} text="37 en réparation" />
            <IndicatorStateWithText warningState={'error'} text="6 hors-service"/>
        </div>
    )
}
