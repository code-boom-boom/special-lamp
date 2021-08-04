/**
 * Main App
 */
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
// import "./lib/reactifyCss";

// app component
import App from "./container/App";

const MainApp = () => (
    <Provider store={ configureStore() }>
        <MuiPickersUtilsProvider utils={ MomentUtils }>
            <Router>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </MuiPickersUtilsProvider>
    </Provider>

);

export default MainApp;