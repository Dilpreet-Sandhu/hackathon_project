"use client"

import { useGetHabitsQuery } from "@/redux/slices/apiSlice"


export const useGetHabits = () => {

    const {data,isLoading} = useGetHabitsQuery();

    return {data,isLoading};


}