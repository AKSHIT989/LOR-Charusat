import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

import UserCreate from '../views/AdminDashboard/UserCreate/UserCreate'
import UserManage from '../views/AdminDashboard/UserManage/UserManage'
import Report from '../views/AdminDashboard/Report/Report'

function Admin() {
    const adminHeader = [
        { icon: `fas fa-user-plus`, text: "User Creation", link: "/admin/user-create" },
        // { icon: `fas fa-envelope-open`, text: "LOR Draft Status", link: "/faculty/draft" },
        { icon: `fas fa-users-cog`, text: "User Management", link: "/admin/user-manage" },
        { icon: `far fa-chart-bar`, text: "Report", link: "/admin/report" },
        { icon: `fas fa-sign-out-alt`, text: "Logout", link: "/auth" },
    ];
    return (
        <>
        <Sidebar navs={adminHeader}/>
        <div className="relative md:ml-64 bg-gray-200">
            <AdminNavbar />

            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
                <Route path="/admin/user-create" exact component={UserCreate} />
                <Route path="/admin/user-manage" exact component={UserManage} />
                <Route path="/admin/report" exact component={Report} />
                <Redirect from="/admin" to="/admin/user-manage" />
            </Switch>
            </div>
        </div>
    </>
    )
}

export default Admin
