import React from 'react'
import Buttons from "../../atoms/Button";
import './index.scss'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Alert from "../../organisms/Alert";

export default function BoxHeaderAlerts() {

    return (
        <div className="boxHeaderAlerts">
            <Button id="PopoverFocus" type="button">
                <img className="btn__icon" src="/assets/images/icons/cloche.svg" /> 12 alertes
            </Button>

            <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus" className="popover">
                <PopoverHeader>Alertes en attente</PopoverHeader>
                <PopoverBody>
                    <Alert type="red" title="#652 Lycée Jean" description="Distributeur en panne" />
                    <Alert type="orange" title="#152 Université Cooloss" description="Distributeur plein attention a vous" />
                    <Alert type="red" title="#32 Salut a HETIC" description="Distributeur en panne" />
                    <Buttons router="/notifications" className="btn--primary" text='Voir toutes les alertes' />
                </PopoverBody>
            </UncontrolledPopover>
        </div>
    )
}
