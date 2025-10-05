import React from 'react'
import FormContainer from '../Form/FormContainer'
import FormInput from '../Form/FormInput'
import Submit from '../Form/Submit'
import Description from '../Form/TextArea'
import { handleSubmit } from '@/utils/action'
import { LucideMail, LucidePhone } from 'lucide-react'
import Link from 'next/link'

function Contents() {
  return (
    <section className='py-16 '> 
      <div className='max-w-4xl lg:ml-12  mx-auto mb-12'>
        <h2 className='font-bold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight'>
          Let's Make Something Awesome
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
          Great things start with a simple hello—so if you're thinking about a project or just want to bounce around some ideas, let's connect!
        </p>
      </div>
      
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12'>
        {/* Contact Info */}
        <div className='lg:w-1/3'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6'>
            <div className='flex items-center gap-4'>
              <div className='bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center'>
                <LucidePhone className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <p className='text-gray-700 dark:text-gray-300'>
                   <Link 
                                href="tel:+9620792504045" 
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                +9620792504045
                            </Link>
              </p>
            </div>
            
            <div className='flex items-center gap-4'>
              <div className='bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center'>
                <LucideMail className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <p className='text-gray-700 dark:text-gray-300 break-words'>
                     <Link 
                                href="mailto:Mohammed.abdallah.dev@gmail.com" 
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Mohammed.abdallah.dev@gmail.com
                    </Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className='lg:w-2/3'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 lg:p-8'>
            <FormContainer action={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FormInput name="name" type="text" start="*" required={true}/>
                <FormInput name="email" type="email" start="*" required={true}/>
                <FormInput name="address" type="text" />
                <FormInput name="phone" type="tel" />
                <div className='md:col-span-2'>
                  <FormInput name="subject" type="text" start="*" required={true} />
                </div>
              </div>
              
              <div className='mb-6'>
                <Description iD="content" label="content" start="*" />
              </div>
              
              <Submit />
            </FormContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contents
