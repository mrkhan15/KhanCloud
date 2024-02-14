import { signIn } from 'next-auth/react'
import React from 'react'

function login() {
  return (
    <div className=''>

        <button className='bg-blue-400 p-2 rounded-xl px-3 text-white' > 
        Login 
        </button>
    </div>
  )
}

export default login