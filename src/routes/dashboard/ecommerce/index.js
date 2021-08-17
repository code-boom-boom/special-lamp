/**
 * Ecommerce Dashboard
 */
import React, { Component } from "react";
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

import {
    VisitorAreaChartWidget,
    OrdersAreaChartWidget,
} from "Components/Widgets";

// widgets data
import {
    visitorsData,
    salesData,
    ordersData,
    topSellingProducts,
    trafficStatus,
    onlineVisitorsData,
} from "./data";

export default class EcommerceDashboard extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="ecom-dashboard-wrapper">
                <Helmet>
                    <title>Ecommerce Dashboard</title>
                    <meta name="description" content="Reactify Ecommerce Dashboard" />
                </Helmet>
                <PageTitleBar title={ <IntlMessages id="sidebar.ecommerce" /> } match={ match } />
                <div className="row">
                    <div className="col-sm-6 col-md-4 w-xs-half-block">
                        <VisitorAreaChartWidget data={ visitorsData } />
                    </div>

                    <div className="col-sm-6 col-md-4 w-xs-half-block">
                        <OrdersAreaChartWidget data={ ordersData } />
                    </div>
                </div>
            </div>
        );
    }
}