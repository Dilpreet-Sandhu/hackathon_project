import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { apiSlice } from "./slices/apiSlice";



export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (defaultMiddleware) => defaultMiddleware().concat(apiSlice.middleware)
});


type RootState = ReturnType<typeof store.dispatch>;


export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;