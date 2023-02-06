import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {setLocalStorage} from "../utils/localStorage/localStorage";
import favoriteReducer from "./reducers/favorite";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );

store.subscribe(() =>{
    setLocalStorage('store', store.getState().favoriteReducer);
})

export default store;