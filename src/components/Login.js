import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
    <div className='absolute'>
      <Header />
      <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg'/>
    </div>
    <div>
      
      <form className='bg-black w-3/12 m-36 mx-auto p-12 right-0 left-0 absolute'>
        <h4 className='font-bold text-white text-lg '>Sign In</h4>
        <input type='text' placeholder='Email Address' className='p-3 m-3 w-11/12 rounded-md' />
        <input type='password' placeholder='Password' className='p-3 m-4 w-11/12 rounded-md' />
        <button className='p-3 m-4 w-11/12 bg-red-700 rounded-md'>Sign In</button>
      </form>
   
    </div>
    </div>
  )
}

export default Login