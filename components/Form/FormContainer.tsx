"use client";
import { actionFunction } from '@/utils/types';
import React, { useActionState, useEffect } from 'react'
import { toast } from "sonner"
interface FormContainerProps {
action:actionFunction;
children: React.ReactNode;
}
const initialState = {
  message: "",
};

function FormContainer({ action, children }: FormContainerProps) {
  const [state,actionState] = useActionState(action, initialState )
  
useEffect(() => {
  if (state.message==="✅ Message sent successfully!") {
    toast.success(state.message)
  }
 else if (state.message.includes("❌")) {
    toast.error(state.message)
  }
}, [state])
  return (
   <form action={actionState} className="space-y-4">
      {children}
   </form>
  )
}

export default FormContainer