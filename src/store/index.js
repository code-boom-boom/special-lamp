import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(RootSaga);

    if (module.hot) {
        // Enable webpack hot module replacement for reducers
        module.hot.accept("../reducers/index", () => {
            const nextRootReducer = require("../reducers/index");
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

}