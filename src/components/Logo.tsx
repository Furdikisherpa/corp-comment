import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/">
    <Image 
    src="/logo.png"
    width={134} height={27}
    alt="Logo"
    className='relative z-1 selection:bg-inherit h-[27.5px items-center'
    

    />
    </Link>
  )
}
