import React from 'react'
import NavHeader from "../../components/organisms/NavHeader";
import NavSidebar from "../../components/organisms/NavSidebar";

export default function Landing() {

    return (
        <div className="landing">
            <NavHeader/>
            <main>
                <NavSidebar/>
                <div className="content">Cc</div>
            </main>
        </div>
    )
}
