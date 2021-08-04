/**
 * Rct Theme Provider
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class RctThemeProvider extends Component {
    render() {
        console.log(this.props);
        return (
            <div>This is theme provider</div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return settings;
};

export default connect(mapStateToProps)(RctThemeProvider);