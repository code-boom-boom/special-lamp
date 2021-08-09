/**
 * Dashboard Overlay
 */
import React, { Component } from "react";

// intl messages
import IntlMessages from "Util/IntlMessages";

// components
import OrdersStats from "Components/DashboardOverlay/Orders";

class DashboardOverlay extends Component {

    componentDidMount() {
        var open = document.getElementsByClassName("dashboard-overlay")[0];
        open.classList.remove("show");
        open.classList.add("d-none");
    }

    render() {
        const { onClose } = this.props;
        return (
            <div className="dashboard-overlay p-4">
                <div className="overlay-head d-flex justify-content-between mb-40">
                    <div className="dash-user-info">
                        <h2 className="fw-bold mb-0"><IntlMessages id="components.summary" /></h2>
                    </div>
                    <button type="button" onClick={ onClose } className="closed rct-link-btn">
                        <i className="ti-close"></i>
                    </button>
                </div>
                <div className="dashboard-overlay-content mb-30">
                    <div className="row row-eq-height">
                        <div className="col-sm-6 col-md-4">
                            <OrdersStats />
                        </div>
                        <div className="col-sm-6 col-md-4">

                        </div>
                        <div className="col-sm-6 col-md-4">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardOverlay;