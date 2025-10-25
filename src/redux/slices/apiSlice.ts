import { baseUrl } from "@/config/routes";
import { ApiResponse } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/api"}),
    endpoints : (builder) => ({
        getHabits : builder.query<void,ApiResponse>({
            query : () => ({
                url : "/habit",
                method : "GET"
            })
        })
    })
});



export const {useGetHabitsQuery} = apiSlice;