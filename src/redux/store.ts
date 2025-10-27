import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { apiSlice } from "./slices/apiSlice";
import habitSlice from "./slices/habitslice";



export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        [habitSlice.reducerPath] : habitSlice.reducer
    },
    middleware : (defaultMiddleware) => defaultMiddleware().concat(apiSlice.middleware)
});


type RootState = ReturnType<typeof store.getState>;


export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;