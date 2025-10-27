import { Habit } from "@/types/types";
import { PersonStandingIcon } from "lucide-react";


export default function HabitItem({habit}:{habit : Habit}) {


  return (
    <div className="w-full h-[60px] border border-zinc-700 rounded-lg flex gap-2 items-center px-4 bg-zinc-800 hover:bg-zinc-700 cursor-pointer">

        <div className="w-5 h-5 flex items-center text-white">
            <PersonStandingIcon/>
        </div>

        <span className="text-white text-sm">{habit.title}</span>
      
    </div>
  )
}
