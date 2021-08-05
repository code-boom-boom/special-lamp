/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// sagas
import authSagas from "./Auth";

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
    ]);
}