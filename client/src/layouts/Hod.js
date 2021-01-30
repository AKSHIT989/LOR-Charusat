import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

// import RequestsAction from '../views/HodDashboard/RequestsAction/RequestsAction'
import LorRequest from "../views/HodDashboard/LorRequest/LorRequest";
import Report from "../views/HodDashboard/Report/Report";
import UserCreate from "../views/HodDashboard/UserCreate/UserCreate";
import UserManage from "../views/HodDashboard/UserManage/UserManage";

import profile from "../assets/img/team-1-800x800.jpg";

function Hod() {
  const hodHeader = [
    {
      icon: `fas fa-envelope-open-text`,
      text: "Approve LOR Request",
      link: "/hod/request",
    },
    { icon: `far fa-chart-bar`, text: "Report", link: "/hod/report" },
    {
      icon: `fas fa-user-plus`,
      text: "User Creation",
      link: "/hod/user-creation",
    },
    {
      icon: `fas fa-users-cog`,
      text: "User Management",
      link: "/hod/user-management",
    },
    { icon: `fas fa-sign-out-alt`, text: "Logout", link: "/auth" },
  ];

  const fields = [
    {
      username: "Id",
      inputValue: "",
    },
    {
      username: "Name",
      inputValue: "",
    },
    {
      username: "Department",
      inputValue: "",
    },
    {
      username: "Institute",
      inputValue: "",
    },
    {
      username: "Counsellor Name",
      inputValue: "",
    },
  ];

  return (
    <>
      <Sidebar navs={hodHeader}  profile={profile} />
      <div className="relative md:ml-64">
        <AdminNavbar profile={profile} />

        <HeaderStats />
        <div className="px-4 py-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            {/* <Route path="/hod/requests-action" exact component={RequestsAction} /> */}
            <Route path="/hod/request" exact component={LorRequest} />
            <Route path="/hod/report" exact component={Report} />
            <Route path="/hod/user-creation" exact component={() => <UserCreate fields={fields} />} />
            <Route path="/hod/user-management" exact component={UserManage} />
            <Redirect from="/hod" to="/hod/request" />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Hod;
