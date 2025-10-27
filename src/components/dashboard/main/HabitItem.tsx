import { useCompleteHabitMutation } from "@/redux/slices/apiSlice";
import { addCompletedHabit, removeUncompletedHabit } from "@/redux/slices/habitslice";
import { Habit } from "@/types/types";
import { CheckIcon, PersonStandingIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";


export default function HabitItem({habit}:{habit : Habit}) {
 
  const [completeHabit] = useCompleteHabitMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  async function onClick() {

    const res = await completeHabit({habitId : habit._id});

    if (res?.data?.success) {

      dispatch(removeUncompletedHabit(habit._id));
      dispatch(addCompletedHabit(habit));
      
    }

  }

    


  return (
    <div className="w-full h-[60px] border border-zinc-700 rounded-lg flex gap-2 justify-between items-center px-4 bg-zinc-800 hover:bg-zinc-700 cursor-pointer">

      <div className="flex max-w-10 gap-1 items-center">
          <div className="w-5 h-5 flex items-center text-white">
              <PersonStandingIcon/>
          </div>

          <span className="text-white text-sm">{habit.title}</span>
      </div>


      <div>

      {
        habit.completed ? (
          <div className="w-5 h-5 border-2 border-white rounded-full bg-white flex items-center justify-center">
            <CheckIcon className="w-3 h-3 text-black"/>
          </div>
        ) : <button onClick={onClick} className="w-5 h-5 border-2 border-white rounded-full cursor-pointer flex items-center justify-center hover:bg-white duration-300"/>
      }
      
      </div>
      
    </div>
  )
}
