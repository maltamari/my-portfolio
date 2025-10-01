import React from 'react'
import Logo from '../navBar/logo'
import Pages from '../navBar/pages'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="dark:bg-gray-900 bg-blue-100 flex flex-col items-center justify-center min-h-60 py-8 px-4 w-full overflow-hidden">
      <div className='flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 max-w-full'>
        <div className="flex-shrink-0">
          <Logo/>
        </div>
        <Link href="/" className="text-blue-400 hover:underline text-center break-words">
          Mohamed Abdallah
        </Link>
      </div>
      
      <div className='mt-4 mb-4 w-full max-w-full overflow-hidden'>
        <div className="flex justify-center">
          <Pages/>
        </div>
      </div>
      
      <div className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-center max-w-full px-2'>
        <p className="text-sm sm:text-base break-words">© 2025 All Rights Reserved by</p>
        <Link href="/" className="text-blue-400 hover:underline text-sm sm:text-base break-words">
          Mohamed Abdallah
        </Link>
      </div>
    </footer>
  )
}

export default Footer