import { Plus } from "lucide-react"


const AddNewButton = () => {
  return (
    <div className="absolute bottom-10 right-10 w-12 h-12 flex items-center justify-center cursor-pointer rounded-full bg-zinc-800 shadow-[0_4px_2px_#272727]">
        <Plus className="w-6 h-6 text-white"/>
    </div>
  )
}

export default AddNewButton
