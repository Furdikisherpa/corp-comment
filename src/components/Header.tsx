import React from 'react'
import Pattern from './Pattern'

export default function Header() {
  return (
    <div className='h-[277px] bg-[#121618] flex flex-col align-center shadow-slate-700 justify-center relative z-[999] pb-[3px]' >

      <Pattern />
      <p>logo</p>
      <p>pageheading</p>
      <p>feedbackform</p>
    </div>
  )
}
