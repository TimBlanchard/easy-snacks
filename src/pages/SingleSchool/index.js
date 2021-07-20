import React from 'react'
import Summary from '../../components/organisms/Summary'
import SchoolRevenue from "../../components/organisms/SchoolRevenue";

export default function SingleSchool() {

    return (
        <div className="main-app single-school">
            <p>single school</p>
            <Summary />
            <SchoolRevenue/>
        </div>
    )
}
