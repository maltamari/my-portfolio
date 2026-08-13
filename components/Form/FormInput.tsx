import React from 'react'

interface FormInputProps {
  name: string
  label?: string
  type: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
  start?: string
}

function FormInput({ name, required, start, label, type, placeholder, defaultValue }: FormInputProps) {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor={name}
        className='text-sm font-medium text-foreground flex items-center gap-1 capitalize'
      >
        {label || name} 
        {start && <span className='text-red-500'>{start}</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='flex h-12 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all'
        required={required ? true : false}
      />
    </div>
  )
}

export default FormInput