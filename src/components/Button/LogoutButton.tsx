

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { LogOut } from 'lucide-react'
import React from 'react'

export default function LogoutButton() {
  return (
    <LogoutLink>
        <button className='w-full h-[60px] rounded-md flex items-center justify-center gap-3 cursor-pointer  border-2 border-zinc-700 hover:bg-zinc-700 text-white hover:text-white/70 duration-500 bg-zinc-800'>
            <LogOut/>
            <p className='text-[16px] font-medium'>Logout</p>
        </button>
    </LogoutLink>
  )
}
