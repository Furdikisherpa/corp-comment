import React from 'react'
import Image from 'next/image'

export default function Pattern() {
  return( 

 <div>
  <Image src="/pattern.svg" 
  alt="pattern" 
  height={86} 
  width={704 } 
  className="absolute top-0 z-0 selection:bg-inherit " /> 
  

  </div>) 
}
