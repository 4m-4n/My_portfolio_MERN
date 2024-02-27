import {configureStore} from "@reduxjs/toolkit"
import { login, updateReducer, userReducer } from "./reducers/user.js";
const store=configureStore({
    reducer:{
        user:userReducer,
        login:login,
        update:updateReducer
    },
});
export default store;