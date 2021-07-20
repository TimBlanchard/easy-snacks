import React from 'react'
import './index.scss'
import IconWithStats from "../../molecules/IconWithStats";

export default function Summary() {

    return (
        <div className="summary box-default">
            <IconWithStats text="Coucou" type="home" />
            <IconWithStats text="Cava" type="search" />
            <IconWithStats text="Trkl" type="activity" />
            <IconWithStats text="Ok" type="search" />
        </div>
    )
}
