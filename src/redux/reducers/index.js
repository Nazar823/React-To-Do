import {applyMiddleware, combineReducers} from "@reduxjs/toolkit";
import React from "react";
import setZero from "./setZero";
import {createStore} from "@reduxjs/toolkit";
// import {composeWithDevTools} from "@reduxjs/toolkit/dist/devtoolsExtension";
import thunkMiddleware from 'redux-thunk';

const rootStore = combineReducers({
    setZero
})

export default createStore(rootStore)