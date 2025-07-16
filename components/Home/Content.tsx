import React from 'react'
import FormContainer from '../Form/FormContainer'
import FormInput from '../Form/FormInput'
import Submit from '../Form/Submit'
import Description from '../Form/TextArea'
import { handleSubmit } from '@/utils/action'
import { LucideMail, LucidePhone } from 'lucide-react'


function Contents() {
  return (
    <section className='mt-50 flex  flex-col  min-h-200'> 
    <div className='md:w-[70%]  py-4'>
      <h2 className='font-bold text-7xl mb-4'>Let’s Make Something Awesome </h2>
      <p>Great things start with a simple hello—so if you’re thinking about a project or just want to bounce around some ideas, let’s connect!</p>
    </div>
    <div className='mt-12 flex flex-col gap-5 md:flex-row  items-start justify-between mb-10 '>
    <div className=' *:p-5 rounded-lg mr-10 shadow-lg  w-full'>
      <div className='flex items-center gap-4 mb-5'>
       <div className='border-1 border-gray-50 w-12 h-12 rounded-md p-3'> <LucidePhone/></div>
        <p>+00962792504045</p>
      </div>
       <div className='flex items-center gap-4 mb-5'>
          <div className='border-1 border-gray-50 w-12 h-12 rounded-md p-3'> <LucideMail/></div>
        <p>Mohamed.altamari17@gmail.com</p>
      </div>
    </div>
     
    <div className=' p-10 rounded-lg shadow-lg w-full '>
      <FormContainer action={handleSubmit}>
        <div className="space-y-4  grid grid-cols-1 lg:grid-cols-2  gap-4">
          <FormInput name="name" type="text" start="*"  required={true}/>
          <FormInput name="email" type="email"  start="*" required={true}/>
          <FormInput name="address" type="text"  />
          <FormInput name="phone" type="number"  />
          <div className='col-span-1 lg:col-span-2'>
            <FormInput  name="subject" type="text" start="*" required={true} />
          </div>
        </div>
        <Description iD="content" label="content" start="*" />
        <Submit />
      </FormContainer>
    </div>
    </div>
    </section>
  )
}

export default Contents
