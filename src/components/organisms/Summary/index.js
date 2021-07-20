import React from 'react'
import './index.scss'
import IconWithStats from "../../molecules/IconWithStats";

export default function Summary() {

    return (
        <div className="summary box-default">
            <IconWithStats title='Revenus' period='/1 jour' value={['3487', '€', 'suffix']} type="home" />
            <IconWithStats title='Revenus' period='/1 semaine' value={['12984', '€', 'suffix']} type="search" />
            <IconWithStats title='Revenus' period='/1 mois' value={['48290', '€', 'suffix']} type="activity" />
            <IconWithStats title='Revenus' period='/1 an' value={['508488', '€', 'suffix']} type="search" />
        </div>
    )
}
