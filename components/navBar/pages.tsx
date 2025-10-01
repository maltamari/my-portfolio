import { linksPages } from '@/utils/links'
import Link from 'next/link'
import React from 'react'

function Pages() {
  return (
    <section className='flex'>
      <div className='hidden sm:flex gap-7  px-5 py-3 rounded-full  font-semibold '>
        {linksPages.map((page)=>{
        return(
          <Link key={page.name} href={page.href}><p>{page.name}</p></Link>
        )
      })}
      </div>
    </section>
  )
}

export default Pages