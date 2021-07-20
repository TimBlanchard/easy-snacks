import React from 'react'
import './index.scss'
import BoxIcon from '../../atoms/BoxIcon'

export default function IconWithStats({text, type}) {

    return (
        <div className="iconWithStats">
            <BoxIcon type={type} />
            {text}
        </div>
    )
}
