import React from 'react'

export default function Button({text}) {

    return (
        <div className="btn">
            <img className="btn__icon" src="/assets/images/logo.png"/>
            <p className="btn__text">{text}</p>
        </div>
    )
}
