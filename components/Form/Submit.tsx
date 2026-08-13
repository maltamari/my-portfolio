"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
import { LucideLoader2, Send } from 'lucide-react'

function Submit() {
  const { pending } = useFormStatus()
  return (
    <button 
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-primary-foreground bg-primary rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:pointer-events-none disabled:scale-100"
    >
      {pending ? (
        <>
          <LucideLoader2 className="animate-spin" size={18} />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send size={18} />
        </>
      )}
    </button>
  )
}

export default Submit