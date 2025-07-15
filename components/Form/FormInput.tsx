import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
interface FormInputProps {
  name: string
  label?: string
  type: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
  start?: string
}

function FormInput({ name,required, start,label, type, placeholder, defaultValue }: FormInputProps) {
  return (
    <div className='mb-4 '>
      <Label
        htmlFor={name}
        className='text-sm   font-medium  capitalize'
      >
        <div className='flex items-center gap-1'>
        {label || name} 
        <span className=' text-red-500'>{start}</span>
        </div>
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='mt-1  w-full   rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
        required= {required ? true : false}
      />
    </div>
  )
}

export default FormInput