import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import appReducer from "./slices/app"
// slices
const rootPersistConfig={
    key:"root",
    storage,
    keyPerfix:'redux-',
    // white List
    // BlackList
}

const rootReducer=combineReducers({
    app:appReducer
})

export {rootPersistConfig,rootReducer}