/**
 * Ecommerce Dashboard
 */
import React, { Component } from "react";
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// rct collapsible card
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

import {
    VisitorAreaChartWidget,
    OrdersAreaChartWidget,
    SalesAreaChartWidget,
    SupportRequest,
    RecentOrdersWidget
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

                    <div className="col-sm-6 col-md-4 w-xs-full">
                        <SalesAreaChartWidget data={ salesData } />
                    </div>
                </div>
                <div className="row">
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
                        heading={ <IntlMessages id="widgets.supportRequest" /> }
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                        customClasses="overflow-hidden"
                    >
                        <SupportRequest />
                    </RctCollapsibleCard>
                    <RctCollapsibleCard
                        colClasses="col-sm-12 col-md-8 col-lg-8 w-xs-full"
                        heading={ <IntlMessages id="widgets.RecentOrders" /> }
                        collapsible
                        reloadable
                        closeable
                        fullBlock
                        customClasses="overflow-hidden"
                    >
                        <RecentOrdersWidget />
                    </RctCollapsibleCard>
                </div>
            </div>
        );
    }
}