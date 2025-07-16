import { cn } from '@/lib/utils'
import React from 'react'
type containerProps={
  children:React.ReactNode,
  className?:String
}

function Container({children,className}:containerProps) {
  return (
  <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-1 lg:px-8',className)}>
     {children}
  </div>
  )
}

export default Container