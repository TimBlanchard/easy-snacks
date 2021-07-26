import React from 'react'
import './index.scss'

export default function Alert({ type, title, description }) {
    return (
        <div className="alert">
            <div className={"alert__box alert__box__"+type}>
                <img className="alert__box__icon" src={"/assets/images/icons/warning-"+type+".svg"} />
            </div>
            <div className="alert__content">
                <p className="name">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
