"use client"
import { cn } from '@/lib/utils';
import {ComponentProps, ReactNode} from 'react';

type Props = {
    children : ReactNode
} & ComponentProps<"button">;

export const Button = ({
    children,
    className,
    ...props
} : Props) => {


    return <button className={cn('px-5 py-2 border-2 rounded-md text-[#0281ff]/60 border-gray-600',className)} {...props}>
        {children}
    </button>

}