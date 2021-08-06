import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// app default layout
import RctAppLayout from "Components/RctAppLayout";

// router service

class DefaultLayout extends Component {
    render() {
        return (
            <RctAppLayout>

            </RctAppLayout>
        );
    }
};

export default withRouter(connect(null)(DefaultLayout));