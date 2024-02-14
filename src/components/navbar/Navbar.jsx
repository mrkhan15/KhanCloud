import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='w-[200px] bg-white h-screen sticky top-0 z-10 shadow-blue-200 shadow-md'>
        <div> <Image src='/cloud.png' width={120} height={60}/> </div>
        Navbar
    </div>
  )
}

export default Navbar