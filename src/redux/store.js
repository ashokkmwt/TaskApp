import taskReducer from "./reducers/TaskReducers";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from "redux";


const rootReducer = combineReducers({ taskReducer })


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleWare) => {
            return [...getDefaultMiddleWare({
                serializableCheck: false
            })]
        }
    }
)


const persistor = persistStore(store);


export {
    store,
    persistor
}