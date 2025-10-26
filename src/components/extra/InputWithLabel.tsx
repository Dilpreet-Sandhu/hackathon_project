


import React, { ComponentProps } from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

type Props = {
    pname : string,
    label : string
    classes ?: string
} & ComponentProps<"input">

const InputWithLabel = ({label,classes,pname,...props} : Props) => {
  return (
    <div className={cn('flex flex-col  align-baseline py-1',classes)}>
        <label className='text-white/80 text-[14px] mb-1'>{label}</label>
        <Input
                   {...props}
                   name={pname}
                    className="w-full bg-[#121212] border border-white/10 text-white/70 placeholder:text-white/40 focus:ring-0 focus:border-white mb-4"
                />
    </div>
  )
}

export default InputWithLabel
