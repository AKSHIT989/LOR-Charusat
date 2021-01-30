import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import StudentDashboard from  './views/StudentDashboard/index'
import Auth from "./layouts/auth";
import Student from "./layouts/Student";
import Faculty from "./layouts/Faculty";
import Hod from "./layouts/Hod";
import Tpr from "./layouts/Tpr";
import Admin from "./layouts/Admin";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/student" component={Student} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/hod" component={Hod} />
        <Route path="/tpr" component={Tpr} />
        <Route path="/admin" component={Admin} />
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

export default routes;
