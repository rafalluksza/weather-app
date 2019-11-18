import {createStore, applyMiddleware} from "redux";
import citiesList from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger"

const store = createStore(
    citiesList,
    composeWithDevTools(applyMiddleware(logger)));

export default store;