/**
 * App Widgets
 */
import React from "react";
import Loadable from "react-loadable";
import PreloadWidget from "Components/PreloadLayout/PreloadWidget";

const MyLoadingComponent = () => (
    <PreloadWidget />
);

const SessionSlider = Loadable({
    loader: () => import("./SessionSlider"),
    loading: MyLoadingComponent
});

const VisitorAreaChartWidget = Loadable({
    loader: () => import("./VisitorAreaChart"),
    loading: MyLoadingComponent
});

const OrdersAreaChartWidget = Loadable({
    loader: () => import("./OrdersAreaChart"),
    loading: MyLoadingComponent
});

export {
    SessionSlider,
    VisitorAreaChartWidget,
    OrdersAreaChartWidget,
}