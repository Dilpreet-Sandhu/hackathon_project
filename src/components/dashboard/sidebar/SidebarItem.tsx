import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ComponentProps} from "react"


type Props = {
    icon : LucideIcon
} & ComponentProps<"div">;

const SidebarItem = ({
    children,
    icon : Icon,
    className,
    ...props
} : Props) => {


  return (
    <div {...props} className={cn("w-full cursor-pointer h-[50px] hover:bg-[#333333a5]  duration-300 gap-3 p-3 b rounded-md flex items-center",className)}>

        <Icon className="w-4 h-4 text-white"/>

        <p className="text-[16px] text-white font-medium">{children}</p>
    
    </div>
  )
}

export default SidebarItem
