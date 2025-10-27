"use client"

import { Avatar ,AvatarFallback} from "@/components/ui/avatar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"


function UserAvatar() {

    const client = useKindeBrowserClient();

    const user = client.user;


  return (
    <div className="w-full cursor-pointer hover:bg-zinc-700 duration-500 h-full bg-zinc-800 border-2 border-zinc-700 flex items-center p-2 gap-3 rounded-lg">

        <User name={user?.given_name}/>

        <p className="text-[16px] font-medium text-white/70">
            Hey, {user?.given_name}
        </p>
      
    </div>
  )
}


const User = ({name} : {name : string | null | undefined}) => {

    const a = !name ? "" : name[0].toUpperCase();

    return (
        <Avatar>
            <AvatarFallback>
                {
                    a
                }
            </AvatarFallback>
        </Avatar>
    )

}

export default UserAvatar
