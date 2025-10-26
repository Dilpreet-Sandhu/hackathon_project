
import { CreateNewHabitModel } from "../models/CreateNewHabitModel"


const AddNewButton = () => {
  return (
    <CreateNewHabitModel>
      <button className="bg-white absolute rounded-md right-12 bottom-12 cursor-pointer hover:opacity-40 duration-700 text-black py-2 px-4">
        <p className="text-[14px] font-medium">Create New Habit</p>
      </button>
    </CreateNewHabitModel>
  )
}

export default AddNewButton
