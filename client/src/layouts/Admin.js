import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

import UserCreate from '../views/AdminDashboard/UserCreate/UserCreate'
import UserManage from '../views/AdminDashboard/UserManage/UserManage'
import Report from '../views/AdminDashboard/Report/Report'

function Admin() {
    return (
        <>
        <Sidebar />
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
