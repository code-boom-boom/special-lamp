/**
 * App Header
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {AppBar, Toolbar} from "@material-ui/core";

// Redux actions
import { collapsedSidebarAction } from "Actions";

// intl messages
import IntlMessages from "Util/IntlMessages";

class Header extends Component {

    state = {
        customizer: false,
        isMobileSearchFormVisible: false
    }

    // mobile search form
    openMobileSearchForm() {
        this.setState({ isMobileSearchFormVisible: true });
    }

    render() {
        const { isMobileSearchFormVisible } = this.state;
        const { horizontalMenu, agencyMenu, location } = this.props;
        return (
            <AppBar position="static" className="rct-header">
                <Toolbar className="d-flex justify-content-between w-100 pl-0">
                    <div className="d-flex align-items-center">
                        { (horizontalMenu || agencyMenu) &&
                            <div className="site-logo">
                                <Link to="/" className="logo-mini">
                                    <img src={require('Assets/img/appLogo.png')} className="mr-15" alt="site logo" width="35" height="35" />
                                </Link>
                                <Link to="/" className="logo-normal">
                                    <img src={require('Assets/img/appLogoText.png')} className="img-fluid" alt="site-logo" width="67" height="17" />
                                </Link>
                            </div>
                        }
                        { !agencyMenu &&
                            <ul className="list-inline mb-0 navbar-left">
                                {!horizontalMenu ?
                                    <li className="list-inline-item">

                                    </li>
                                    :
                                    <li className="list-inline-item">

                                    </li>
                                }
                            </ul>
                        }
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return settings;
};

export default withRouter(connect(mapStateToProps, {
    collapsedSidebarAction
})(Header));