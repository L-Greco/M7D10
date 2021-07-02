import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import dataReducer from "../reducers/data.js"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    weather: {},
    query: "",
    isLoading: false,
    error: ""
}

const configureStore = () => createStore(dataReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore