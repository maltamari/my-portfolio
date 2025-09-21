import { cn } from '@/lib/utils'
import React from 'react'
type containerProps={
  children:React.ReactNode,
  className?:String
}

function Container({children,className}:containerProps) {
  return (
  <div className={cn('flex justify-center items-center box-border w-full ',className)}>
     {children}
  </div>
  )
}

export default Container
