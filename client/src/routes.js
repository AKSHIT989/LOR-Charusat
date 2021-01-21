import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
// import StudentDashboard from  './views/StudentDashboard/index'
import Admin from  './layouts/dashboard'

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes
