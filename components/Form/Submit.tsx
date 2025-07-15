"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useFormState, useFormStatus } from 'react-dom'
import { LucideLoader2 } from 'lucide-react'

function Submit() {
  const {pending}=useFormStatus()
  return (
    <Button 
      type="submit"
      className="mt-4 w-full capitalize bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md shadow-sm"
    >
        {pending ? (
        <>
          <LucideLoader2 className="animate-spin w-5 h-5" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  )
}

export default Submit