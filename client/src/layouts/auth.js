import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"

import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
function auth() {
    return (
        <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
        </Switch>
    )
}

export default auth
