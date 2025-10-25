"use client"

import routes from '@/config/routes'
import Link from 'next/link'
import React from 'react'
import { Button } from '../Button/Button'

const DashboardButton = () => {
  return (
    <Link className="z-30 hover:-translate-x-0.5 hover:-translate-y-0.5 duration-500 animate-accordion-up" href={routes.dashboard}>
              <Button onClick={() => console.log("hello world")} className="z-300 cursor-pointer">
                Go to dashboard -&gt;
              </Button>
            </Link>
  )
}

export default DashboardButton
