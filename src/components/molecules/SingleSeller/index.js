import React from 'react'
import './index.scss'

export default function SingleSeller({ id, product, sold }) {
    return (
        <div className="single-seller">
            <div>
                <span className="single-seller__id">#{id}</span>
                <p>{product}</p>
            </div>
            <p>{sold} ventes</p>
        </div>
    )
}
