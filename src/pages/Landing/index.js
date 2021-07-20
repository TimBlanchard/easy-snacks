import React from 'react'
import Error from '../../components/organisms/Error'
import Summary from '../../components/organisms/Summary'
import {Link} from "wouter";
import ArrayData from '../../components/organisms/ArrayData';

export default function Landing() {

    return (
        <div className="main-app landing">
            <Error />
            <Summary />
            <ArrayData />
            <Link href="/schools/lyceeMichel">
                <a className="link">See single school</a>
            </Link>
        </div>
    )
}
