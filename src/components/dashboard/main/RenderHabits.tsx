"use client"

import { useGetHabits } from "@/hooks/useGetHabits"

const RenderHabits = () => {

    const {data} = useGetHabits();

    console.log(data);

  return (
    <div>
      
    </div>
  )
}

export default RenderHabits
