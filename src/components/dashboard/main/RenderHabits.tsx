"use client"

import { useGetHabits } from "@/hooks/useGetHabits"
import { Habit } from "@/types/types";
import { ChevronDown } from "lucide-react";
import HabitItem from "./HabitItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCompletedHabits, setUncompletedHabits } from "@/redux/slices/habitslice";
import { EmptyBox } from "./Empty"; 
import { useAppSelector } from "@/redux/store";

const RenderHabits = () => {

    const dispatch = useDispatch();

    const {completedHabits : cHabits,unCompletedHabits : unChabits} = useAppSelector(state => state.habit);

    const {completedHabits,unCompletedHabits,isLoading} = useGetHabits();

    useEffect(() => {

        dispatch(setCompletedHabits(completedHabits));
        dispatch(setUncompletedHabits(unCompletedHabits));

    },[completedHabits,unCompletedHabits,isLoading,dispatch])

    if (isLoading) {
      return (
        <div>
          loading...
        </div>
      )
    }

    if (completedHabits.length === 0 && unCompletedHabits.length === 0) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <EmptyBox/>
        </div>
      )
    }

    

  return (
    <div className="w-full p-4 flex flex-col">
      <label className="flex gap-2 items-center text-gray-300 text-sm mb-4">
        <ChevronDown className="w-4 h-4"/>
        <span>Uncompleted Habits ({unChabits?.length})</span>
      </label>

      <ShowHabits habits={unChabits}/>

      <label className="flex gap-2 items-center text-gray-300 text-sm mb-4">
        <ChevronDown className="w-4 h-4"/>
        <span>Completed Habits ({cHabits?.length})</span>
      </label>

      <ShowHabits habits={cHabits}/>
      
      
    </div>
  )
}

const ShowHabits = ({habits}:{habits : Habit[]}) => {


  return (
    <div className="w-full flex flex-col gap-4 mb-8">
    {
      habits?.map(habit => (
        <HabitItem key={habit._id} habit={habit}/>            
      ))
    }
    </div>
  )


}



export default RenderHabits
