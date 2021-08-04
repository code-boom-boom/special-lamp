/**
 * App.js Layout starts here
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect, Route} from "react-router-dom";
import { NotificationContainer } from 'react-notifications';

// rct theme provider
import RctThemeProvider from "./RctThemeProvider";

// Main App
import RctDefaultLayout from "./DefaultLayout";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, authUser, ...rest}) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />}
    />;

class App extends Component {
    render () {
        const { location, match, user } = this.props;

        if (location.pathname === "/") {
            if (user === null) {
                return (<Redirect to={ "/signin" } />);
            } else {
                return (<Redirect to={ "/app/dashboard/ecommerce" } />);
            }
        }

        return (
            <RctThemeProvider>
                <NotificationContainer />
                <InitialPath
                    path={ `${match.url}app` }
                    authUser={ user }
                    component={ RctDefaultLayout }
                />
            </RctThemeProvider>
        );
    };
}

// map state to props
const mapStateToProps = ({ authUser }) => {
    const { user } = authUser;
    return { user };
}

export default connect(mapStateToProps)(App);