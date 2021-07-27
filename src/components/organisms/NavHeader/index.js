import React from 'react'
import Logo from "../../atoms/Logo";
import './index.scss'
import DispensersState from "../DispensersState";
import LoginInfo from "../../molecules/LoginInfo";
import BoxHeaderAlerts from "../../molecules/BoxHeaderAlerts";

export default function NavHeader() {

    return (
        <div className="nav-header">
            <div className="nav-header__block--left">
                <Logo/>
                <DispensersState/>
            </div>
            <div className="nav-header__block--right">
                <BoxHeaderAlerts />
                <LoginInfo/>
            </div>
        </div>
    )
}
