import React from 'react'
import Error from '../../components/organisms/Error'
import Summary from '../../components/organisms/Summary'
import ArrayData from '../../components/organisms/ArrayData'

export default function Landing() {

    return (
        <div className="main-app landing">
            <Error />
            <Summary />
            <ArrayData />
        </div>
    )
}
