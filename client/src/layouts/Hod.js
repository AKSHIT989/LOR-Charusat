import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

// import RequestsAction from '../views/HodDashboard/RequestsAction/RequestsAction'
import LorRequest from '../views/HodDashboard/LorRequest/LorRequest'
import Report from '../views/HodDashboard/Report/Report'
import UserCreate from '../views/HodDashboard/UserCreate/UserCreate'
import UserManage from '../views/HodDashboard/UserManage/UserManage'


function Hod() {
    const hodHeader = [
        { icon: `fas fa-envelope-open-text`, text: "LOR Requests", link: "/hod/requests-action" },
        { icon: `far fa-chart-bar`, text: "Report", link: "/hod/report" },
        { icon: `fas fa-user-plus`, text: "User Creation", link: "/hod/user-create" },
        { icon: `fas fa-users-cog`, text: "User Management", link: "/hod/user-manage" },
        { icon: `fas fa-sign-out-alt`, text: "Logout", link: "/auth" },
      ];
    return (
        <>
            <Sidebar navs={hodHeader} />
            <div className="relative md:ml-64 bg-gray-200">
                <AdminNavbar />

                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <Switch>
                    {/* <Route path="/hod/requests-action" exact component={RequestsAction} /> */}
                    <Route path="/hod/request" exact component={LorRequest} />
                    <Route path="/hod/report" exact component={Report} />
                    <Route path="/hod/user-create" exact component={UserCreate} />
                    <Route path="/hod/user-manage" exact component={UserManage} />
                    <Redirect from="/hod" to="/hod/request" />
                </Switch>
                </div>
            </div>
        </>
    )
}

export default Hod
