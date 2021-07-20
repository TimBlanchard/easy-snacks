import React from 'react'
import './index.scss'
import BoxIcon from '../../atoms/BoxIcon'
import NumberFormat from 'react-number-format';

export default function IconWithStats({title, period, value, type}) {

    return (
        <div className="iconWithStats">
            <BoxIcon type={type} />
            <div className="iconWithStats__content">
                <p className="iconWithStats__content__title">{title}<span> {period}</span></p>
                <NumberFormat className="iconWithStats__content__value" value={value[0]} displayType={'text'} thousandSeparator={' '} suffix={value[1]} />
            </div>
        </div>
    )
}
