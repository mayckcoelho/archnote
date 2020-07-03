import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"

import Layout from "../shared/components/Layout"
import Header from "../shared/components/Header"

import Home from "../pages/Home"
import NoteDetail from "../pages/NoteDetail"

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/note" component={NoteDetail} />
                <Redirect from="*" to="/" />
            </Switch>
        </Layout>
    )
}

export default AppRoutes