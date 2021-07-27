import React from 'react'
import Logo from "../../atoms/Logo";
import Buttons from "../../atoms/Button";
import './index.scss'
import DispensersState from "../DispensersState";
import LoginInfo from "../../molecules/LoginInfo";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import HeaderBox from "../../molecules/HeaderBox";
import Alert from "../Alert";

export default function NavHeader() {

    return (
        <div className="nav-header">
            <div className="nav-header__block--left">
                <Logo/>
                <DispensersState/>
            </div>
            <div className="nav-header__block--right">
                <Button id="PopoverFocus" type="button">
                    <img className="btn__icon" src="/assets/images/icons/cloche.svg" /> 12 alertes
                </Button>
                <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverFocus" className="popover">
                    <PopoverHeader>Alertes en attente</PopoverHeader>
                    <PopoverBody>
                        <Alert type="red" title="#652" description="Distributeur en panne" />
                        <Alert type="orange" title="#152" description="Distributeur plein attention a vous" />
                        <Alert type="red" title="#32" description="Distributeur en panne" />
                        <Buttons className="btn--primary" text='Voir toutes les alertes' />
                    </PopoverBody>
                </UncontrolledPopover>
                <LoginInfo/>
            </div>
        </div>
    )
}
