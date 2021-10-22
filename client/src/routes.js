import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import StudentDashboard from  './views/StudentDashboard/index'
import Auth from "./layouts/auth";
import Student from "./layouts/Student";
import Faculty from "./layouts/Faculty";
import Hod from "./layouts/Hod";
import Tpr from "./layouts/Tpr";
import Admin from "./layouts/Admin";
import { UserContext } from "./contexts/user";

const routes = {
  student: (<Route path="/student" component={Student} />),
  faculty: (<Route path="/faculty" component={Faculty} />),
  tpr: (<Route path="/tpr" component={Tpr} />),
  hod: (<Route path="/hod" component={Hod} />),
  admin: (<Route path="/admin" component={Admin} />),
}

function Routes() {
  const [ userInfo ] = useContext(UserContext);
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/auth" component={Auth} />
          {
            userInfo && userInfo.user_type && routes[userInfo.user_type.toLowerCase()]
          }
          <Route
            path="/redirect"
            component={() => {
              window.location.href = window.location.pathname.substr(10);
              return null;
            }}
          />
          <Redirect from="/" to="/auth" />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
