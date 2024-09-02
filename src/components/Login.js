import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const toggleSignInForm = ()=>{
    setisSignIn(!isSignIn);
  };
  return (
    <div>
    <div className='absolute'>
      <Header />
      <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg'/>
    </div>
    <div>
      <form className='bg-black w-3/12 m-36 mx-auto p-12 right-0 left-0 absolute  bg-opacity-75'>
        <h4 className='font-bold text-white text-lg '>
          {isSignIn? "Sign In" : "Sign Up"}
        </h4>
        {!isSignIn && <input type='text' placeholder='Full Name' className='p-3 m-3 w-11/12 rounded-md bg-gray-700' />}
        <input type='text' placeholder='Email Address' className='p-3 m-3 w-11/12 rounded-md bg-gray-700' />
        <input type='password' placeholder='Password' className='p-3 m-4 w-11/12 rounded-md bg-gray-700' />
        <button className='p-3 m-4 w-11/12 bg-red-700 rounded-md'>{isSignIn?"Sign In":"Sign Up"}</button>
        <h4 className='text-white cursor-pointer' onClick={()=>{
          toggleSignInForm()
        }}>{isSignIn?"New to Netflix! Sign Up":"Already Registered! Sign In"}</h4>
      </form>
    </div>
    </div>
  )
}

export default Login