import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

import Request from '../views/FacultyDashboard/Request/LorRequest'
// import Report from '../views/FacultyDashboard/Report/Report'
// import Profile from '../views/FacultyDashboard/Profile/Profile'

import profile from "../assets/img/settings.svg";

function Faculty() {
    const facultyHeader = [
        { icon: `fas fa-envelope-open-text`, text: "LOR Requests", link: "/faculty/request" },
        // { icon: `fas fa-envelope-open`, text: "LOR Draft Status", link: "/faculty/draft" },
        // { icon: `far fa-chart-bar`, text: "Report", link: "/faculty/report" },
        { icon: `fas fa-sign-out-alt`, text: "Logout", link: "/auth/login" },
      ];
    return (
        <>
            <Sidebar navs={facultyHeader}  profile={profile} />
            <div className="relative md:ml-64">
                <AdminNavbar profile={profile} />

                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <Switch>
                    <Route path="/faculty/request" exact component={Request} />
                    {/* <Route path="/faculty/report" exact component={Report} />
                    <Route path="/faculty/profile" exact component={Profile} /> */}
                    <Redirect from="/faculty" to="/faculty/request" />
                </Switch>
                </div>
            </div>
        </>
    )
}

export default Faculty
