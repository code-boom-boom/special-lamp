import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import RctThemeProvider from "./RctThemeProvider";

class App extends Component {
    render () {
        const { location, match, user } = this.props;

        if (location.pathname === "/") {
            if (user === null) {
                return (<Redirect to={"/signin"} />);
            } else {
                return (<Redirect to={"/app/dashboard/ecommerce"} />);
            }
        }

        return (
            <RctThemeProvider></RctThemeProvider>
        );
    };
}

// map state to props
const mapStateToProps = ({ authUser }) => {
    const { user } = authUser;
    return { user };
}

export default connect(mapStateToProps)(App);