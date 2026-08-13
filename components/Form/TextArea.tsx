import React from 'react'

interface TextAreaProps {
  iD: string
  label?: string
  placeholder?: string
  defaultValue?: string
  start?: string
}

function Description({ iD, start, label, placeholder, defaultValue }: TextAreaProps) {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor={iD}
        className="text-sm font-medium text-foreground flex items-center gap-1 capitalize"
      >
        {label} 
        {start && <span className='text-red-500'>{start}</span>}
      </label>
      <textarea
        id={iD}
        name={label || iD}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="flex min-h-[120px] w-full rounded-xl border border-border bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-y"
        required
      />
    </div>
  )
}

export default Description