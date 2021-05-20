import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

import Request from '../views/TprDashboard/Request/LorRequest'
import Report from '../views/TprDashboard/Report/Report'

import profile from "../assets/img/team-1-800x800.jpg";

function Tpr() {
    const tprHeader = [
        { icon: `fas fa-envelope-open-text`, text: "LOR Requests", link: "/tpr/request" },
        { icon: `far fa-chart-bar`, text: "Report", link: "/tpr/report" },
        { icon: `fas fa-sign-out-alt`, text: "Logout", link: "/auth" },
      ];
    return (
        <>
            <Sidebar navs={tprHeader} profile={profile} />
            <div className="relative md:ml-64">
                <AdminNavbar profile={profile} />

                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <Switch>
                    <Route path="/tpr/request" exact component={Request} />
                    <Route path="/tpr/report" exact component={Report} />
                    <Redirect from="/tpr" to="/tpr/request" />
                </Switch>
                </div>
            </div>
        </>
    )
}

export default Tpr
