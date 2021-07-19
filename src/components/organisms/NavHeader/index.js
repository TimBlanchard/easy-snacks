import React from 'react'
import Logo from "../../atoms/Logo";
import Button from "../../atoms/Button";

export default function NavHeader() {

    return (
        <div className="nav-header">
            <Logo/>
            <Button text='alerte'/>
        </div>
    )
}
