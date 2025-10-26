import { Label } from "@radix-ui/react-dropdown-menu"


const OptionInput = () => {
  return (
    <div className="flex py-2 items-center">

        <div className="text-[14px] text-white mr-4  text-nowrap"> 
            <label>Time of day</label>
        </div>

        <div className="w-full flex ">
            <select name="timeOfDay" className="w-full bg-[#121212] rounded-md border border-white/10 text-white/70 placeholder:text-white/40 focus:ring-0 focus:border-white mb-4 p-2 ">
                <option value="" disabled >Select Option</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
            </select>
        </div>

    </div>
  )
}

export default OptionInput
