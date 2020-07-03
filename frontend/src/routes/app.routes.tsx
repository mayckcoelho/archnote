import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"

import Home from "../pages/Home"
import NoteDetail from "../pages/NoteDetail"

const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/note" component={NoteDetail} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default AppRoutes