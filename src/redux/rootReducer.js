import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import appReducer from "./slices/app"
import authReducer from "./slices/auth"
// slices
const rootPersistConfig={
    key:"root",
    storage,
    keyPerfix:'redux-',
    // white List
    // BlackList
}

const rootReducer=combineReducers({
    app:appReducer,
    auth:authReducer
})

export {rootPersistConfig,rootReducer}