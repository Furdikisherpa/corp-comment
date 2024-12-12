import React from 'react'
import Pattern from './Pattern'
import Logo from './Logo'
import PageHeading from './PageHeading'
import FeedbackForm from './FeedbackForm'

export default function Header() {
  return (
    <div className='h-[277px] bg-[#121618] flex flex-col items-center shadow-slate-700 justify-center relative z-[999] pb-[3px]' >

      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </div>
  )
}
