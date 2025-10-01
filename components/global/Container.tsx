import { cn } from '@/lib/utils'
import React from 'react'

type containerProps = {
  children: React.ReactNode,
  className?: string
}

function Container({ children, className }: containerProps) {
  return (
    <div className={cn(
      'w-full min-h-0 flex-1 flex flex-col justify-start items-center px-4 py-8', 
      className
    )}>
      {children}
    </div>
  )
}

export default Container