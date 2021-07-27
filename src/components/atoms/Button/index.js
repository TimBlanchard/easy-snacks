import React from 'react'
import './index.scss'
import {Link} from "wouter";

export default function Button({text, type, icon, className, router}) {

    return (
        <>
            {router ?
                <Link href={router}>
                    <div className={'btn ' + className}>
                        {
                            icon && <img className="btn__icon" src={icon}/>
                        }
                        <p className="btn__text">{text}</p>
                    </div>
                </Link>
                :
                <div className={'btn ' + className}>
                    {
                        icon && <img className="btn__icon" src={icon}/>
                    }
                    <p className="btn__text">{text}</p>
                </div>
            }
        </>
    )
}
