/**
 * App Layout
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "react-sidebar";
import classnames from "classnames";

// Components
import SidebarContent from "Components/Sidebar";

// preload components
import PreloadSidebar from "Components/PreloadLayout/PreloadSidebar";

// app config
import AppConfig from "Constants/AppConfig";

// actions
import { collapsedSidebarAction } from "Actions";

class MainApp extends Component {

    state = {
        loadingHeader: true,
        loadingSidebar: true,
    }

    UNSAFE_componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        const { windowWidth } = this.state;
        window.addEventListener("resize", this.updateDimensions);
        setTimeout(() => {
            this.setState({ loadingHeader: false, loadingSidebar: false });
        }, 114);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { windowWidth } = this.state;
        if (nextProps.location !== this.props.location) {
            if (windowWidth <= 1199) {
                this.props.collapsedSidebarAction(false);
            }
        }
    }

    updateDimensions = () => {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    // render sidebar
    renderSidebar() {
        const { loadingSidebar } = this.state;
        if (loadingSidebar) {
            return <PreloadSidebar />;
        }
        return <SidebarContent />;
    }

    render() {
        const { navCollapsed, rtlLayout, miniSidebar } = this.props.settings;
        const { windowWidth } = this.state;
        return (
            <div className="app">
                <div className="app-main-container">
                    <Sidebar
                        sidebar={ this.renderSidebar() }
                        open={ windowWidth <= 1199 ? navCollapsed : false }
                        docked={ windowWidth > 1199 ? !navCollapsed : false }
                        pullRight={ rtlLayout }
                        onSetOpen={ () => this.props.collapseSidebarAction(false) }
                        styles={ { content: { overflowY: "" } } }
                        contentClassName={ classnames({ "app-container-wrapper" : miniSidebar }) }
                    >
                        <div className="app-container">
                            <div className="rct-app-content">
                                <div className="app-header">
                                </div>
                                <div className="rct-page">
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ settings }) => {
    return { settings };
}

export default withRouter(connect(mapStateToProps, {
    collapsedSidebarAction
})(MainApp));