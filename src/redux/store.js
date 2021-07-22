import {createStore} from "@reduxjs/toolkit";
import {reducer} from "./test/test"

const store = createStore(reducer);

export default store;