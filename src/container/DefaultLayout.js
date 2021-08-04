import {Component} from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux"

class DefaultLayout extends Component {
    render() {
        return (
            <div>This is default layout</div>
        );
    }
};

export default withRouter(connect(null)(DefaultLayout));