import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
 
interface TextAreaProps {
  iD: string
  label?: string
  placeholder?: string
  defaultValue?: string
  start?: string
}
function Description({ iD, start,label, placeholder, defaultValue }: TextAreaProps) {
  return (
    <div>
      
      <Label
        htmlFor={iD}
        className="block text-sm capitalize font-medium "
      >
         <div className='flex items-center gap-1'>
        {label } 
        <span className=' text-red-500'>{start}</span>
        </div>
      </Label>
      <Textarea
        id={iD}
        name={label || iD}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        required
      />
    </div>
  )
}

export default Description