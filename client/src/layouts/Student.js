import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

import Status from "../views/StudentDashboard/Status/Status";
import DraftStatus from "../views/StudentDashboard/DraftStatus/DraftStatus";
import LorRequest from "../views/StudentDashboard/LorRequest/LorRequest";
// import Admission from "../views/StudentDashboard/Admission/Admission";
// import Report from "../views/StudentDashboard/Report/Report";

import profile from "../assets/img/settings.svg";
// import { UserContext } from "../contexts/user.js";

function Student() {
  const studentHeader = [
    { icon: `fas fa-home`, text: "LOR Status", link: "/student/status" },
    {
      icon: `fas fa-envelope-open-text`,
      text: "LOR Request",
      link: "/student/request",
    },
    // {
    //   icon: `fas fa-address-card`,
    //   text: "Admission Card",
    //   link: "/student/admission",
    // },
    {
      icon: `fas fa-envelope-open`,
      text: "LOR Draft Status",
      link: "/student/draft-status",
    },
    // { icon: `far fa-chart-bar`, text: "Report", link: "/student/report" },
    { icon: `fas fa-sign-out-alt`, text: "Logout", link: "/auth" },
  ];

  // const [userInfo] = useContext(UserContext);
  // const history = useHistory();

  // useEffect(() => {
  //   if (!userInfo || userInfo.user_type.toLowerCase() !== 'student') {
  //     history.replace('/auth/login');
  //   }
  // }, []);

  return (
    <>
      <Sidebar navs={studentHeader} profile={profile} />
      <div className="relative md:ml-64">
        <AdminNavbar profile={profile} />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/student/status" exact component={Status} />
            <Route path="/student/draft-status" exact component={DraftStatus} />
            <Route path="/student/request" exact component={LorRequest} />
            {/* <Route path="/student/admission" exact component={Admission} /> */}
            {/* <Route path="/student/report" exact component={Report} /> */}
            <Redirect from="/student" to="/student/status" />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Student;
