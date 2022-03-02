import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { cryptoReducers } from "./reducers/cryptoReducers";
import crypoSaga from "./saga/crypoSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    cryptoReducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(crypoSaga)

export default store;