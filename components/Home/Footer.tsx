import React from 'react'
import Logo from '../navBar/logo'
import Pages from '../navBar/pages'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="dark:bg-gray-900 bg-blue-100 flex flex-col items-center justify-center h-60">
      <div className='flex justify-center items-center gap-2 mt-4'>
          <Logo/>
          <Link href="/" className="text-blue-400  hover:underline">
          Mohamed Abdallah 
        </Link>   
      </div>
      <div className='mt-1 mb-1'>
        <Pages/>
      </div>
      <div className='flex *:justify-center items-center gap-2 '>
        <p>© 2025 All Rights Reserved by</p>
        <Link href="/" className="text-blue-400  hover:underline">
          Mohamed Abdallah 
        </Link>   
      </div>
    </footer>
  )
}

export default Footer