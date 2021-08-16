/**
 * AsyncComponent
 */
import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

// ecommerce dashboard
const AsyncEcommerceDashboardComponent = Loadable({
    loader: () => import("Routes/dashboard/ecommerce"),
    loading: () => <RctPageLoader />
});

export {
    AsyncEcommerceDashboardComponent
}