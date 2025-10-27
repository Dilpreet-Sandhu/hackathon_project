import { baseUrl } from "@/config/routes";
import { ApiResponse, HabitType } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/api"}),
    endpoints : (builder) => ({
        getHabits : builder.query<ApiResponse,void>({
            query : () => ({
                url : "/habit",
                method : "GET"
            })
        }),
        createHabit : builder.mutation<ApiResponse,HabitType>({
            query : (habit) => ({
                url : "/habit",
                body : habit,
                method : "POST"
            })
        }),
        completeHabit : builder.mutation<ApiResponse,{habitId : string}>({
            query : ({habitId}) => ({
                url : "/habit/complete",
                method : "POST",
                body : {habitId}
            })
        })
    })
});



export const {useGetHabitsQuery,useCreateHabitMutation,useCompleteHabitMutation} = apiSlice;