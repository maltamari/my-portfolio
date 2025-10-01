import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VscCode } from 'react-icons/vsc'

function Logo() {
  return (
    <div>
        <Link href={"/"} className='flex gap-1 hover:font-bold  items-center ml-10' ><VscCode className='w-6 h-6 hover:animate-spin font-bold'/></Link>
    </div>
  )
}

export default Logo