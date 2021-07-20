import React from 'react'
import Logo from "../../atoms/Logo";
import Button from "../../atoms/Button";
import './index.scss'

export default function NavHeader() {

    return (
        <div className="nav-header">
            <div className="nav-header__left-block">
                <Logo/>
                <p>blabal</p>
            </div>
            <div className="nav-header__right-block">
                <Button icon="/assets/images/icons/cloche.png" className="btn--primary" text='12 alertes' />
                <Button className="btn--error" text='Résoudre les problèmes' />
            </div>
        </div>
    )
}
