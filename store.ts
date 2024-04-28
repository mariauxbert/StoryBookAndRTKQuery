import {  configureStore} from "@reduxjs/toolkit";
import noteReducer from "./src/redux/slices/notesslice";
import { getApiCall } from "./src/RTKQuery/services/GetApiCall";
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer:{
        notes:noteReducer,
        [getApiCall.reducerPath]:getApiCall.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApiCall.middleware),

})

setupListeners(store.dispatch)
export type AppDispatch= typeof store.dispatch;
export type RootState= ReturnType <typeof store.getState>;
