import React from 'react'
import './index.scss'
import Button from "../../atoms/Button";

export default function Error({title, description, button}) {

    return (
        <div className="error box-default">
            <div className="error__left">
                <img className="error__icon" src="/assets/images/icons/warning-red.svg"/>
                <div className="error__text">
                    <p className="error__text__title">{title}</p>
                    {description &&
                    <p className="error__text__information">{description}</p>
                    }
                </div>
            </div>
            <div className="error__right">
                <Button className="btn--error" text={button} />
                <img className="error__exit" src="/assets/images/icons/exit.svg"/>
            </div>
        </div>
    )
}
