import { createStore } from "redux";
import reducers from "../reducers";


export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState
    );

    if (module.hot) {
        // Enable webpack hot module replacement for reducers
        module.hot.accept("../reducers/index", () => {
            const nextRootReducer = require("../reducers/index");
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

}