import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/TaskReducers";

const store = configureStore(
    {
        reducer: {
            taskReducer: taskReducer
        }
    }
) 

export default store