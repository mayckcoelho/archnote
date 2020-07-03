import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"

const AuthRoutes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default AuthRoutes