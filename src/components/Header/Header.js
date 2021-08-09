/**
 * App Header
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {AppBar, Button, IconButton, Toolbar, Tooltip} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// Redux actions
import { collapsedSidebarAction } from "Actions";

// Helpers
import { getAppLayout } from "Helpers/helpers";

// components
import LanguageProvider from "./LanguageProvider";

// intl messages
import IntlMessages from "Util/IntlMessages";

class Header extends Component {

    state = {
        customizer: false,
        isMobileSearchFormVisible: false
    }

    // function to change the state of collapsed sidebar
    onToggleNavCollapsed = (event) => {
        const val = !this.props.navCollapsed;
        this.props.collapsedSidebarAction(val);
    }

    // open dashboard overlay
    openDashboardOverlay(e) {
        var el = document.getElementsByClassName("dashboard-overlay")[0];
        el.classList.toggle("d-none");
        el.classList.toggle("show");
        if (el.classList.contains("show")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        e.preventDefault();
    }

    // close dashboard overlay
    closeDashboardOverlay() {
        var e = document.getElementsByClassName("dashboard-overlay")[0];
        e.classList.remove("show");
        e.classList.add("d-none");
        document.body.style.overflow = "";
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
                                    <li className="list-inline-item" onClick={ (e) => this.onToggleNavCollapsed(e) }>
                                        <Tooltip title="Sidebar Toggle" placement="bottom">
                                            <IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0">
                                                <MenuIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </li>
                                    :
                                    <li className="list-inline-item">
                                        <Tooltip title="Sidebar Toggle" placement="bottom">
                                            <IconButton color="inherit" aria-label="Menu" className="humburger p-0" component={ Link } to="/">
                                                <i className="ti-layout-sidebar-left"></i>
                                            </IconButton>
                                        </Tooltip>
                                    </li>
                                }
                            </ul>
                        }
                    </div>
                    <ul className="navbar-right list-inline mb-0">
                        <li className="list-inline-item summary-icon">
                            <Tooltip title="Summary" placement="bottom">
                                <a href="#" className="header-icon tour-step-3" onClick={ (e) => this.openDashboardOverlay(e) }>
                                    <i className="zmdi zmdi-info-outline"></i>
                                </a>
                            </Tooltip>
                        </li>
                        { !horizontalMenu &&
                            <li className="list-inline-item">
                                <Tooltip title="Upgrade" placement="bottom">
                                    <Button component={ Link } to={ `/${ getAppLayout(location) }/pages/pricing` } variant="contained" className="upgrade-btn tour-step-4 text-white" color="primary">
                                        <IntlMessages id="widgets.upgrade" />
                                    </Button>
                                </Tooltip>
                            </li>
                        }
                        <LanguageProvider />
                    </ul>
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