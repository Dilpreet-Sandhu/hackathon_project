
"use client"

import { useGetHabitsQuery } from "@/redux/slices/apiSlice"

interface Habit {
    completed: boolean;
    _id : string;
    title : string;
}

export const useGetHabits = () => {

    const {data,isLoading} = useGetHabitsQuery();

    const completedHabits = (data?.data as Habit[])?.filter(habit => habit.completed);

    const unCompletedHabits = (data?.data as Habit[])?.filter(habit => !habit.completed);

    return {
        completedHabits,
        unCompletedHabits,
        isLoading
    }

    


}