"use client"

import { useGetHabits } from "@/hooks/useGetHabits"
import { Habit } from "@/types/types";
import { ChevronDown } from "lucide-react";
import HabitItem from "./HabitItem";

const RenderHabits = () => {

    const {completedHabits,unCompletedHabits,isLoading} = useGetHabits();

    

  return (
    <div className="w-full p-4 flex flex-col">

      <label className="flex gap-2 items-center text-gray-300 text-sm mb-4">
        <ChevronDown className="w-4 h-4"/>
        <span>Uncompleted Habits ({unCompletedHabits.length})</span>
      </label>

      <ShowHabits habits={unCompletedHabits}/>
      
      
    </div>
  )
}

const ShowHabits = ({habits}:{habits : Habit[]}) => {


  return (
    <div className="w-full flex flex-col gap-4 mb-8">
    {
      habits.map(habit => (
        <HabitItem key={habit._id} habit={habit}/>
      ))
    }
    </div>
  )


}



export default RenderHabits
