import React, { useState, useRef } from 'react'
import Header from './Header'
import validateformData from '../utils/validate';
import {getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../utils/firebase';
const auth = getAuth();
const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [signinerror, setsigninerror] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = ()=>{
    setisSignIn(!isSignIn);
  };
  const validateForm = () =>{
   
      const message  = validateformData(email.current.value, password.current.value);
      setsigninerror(message);
      if(message) return;

      //sign in or sign up user
      if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
      }
      else {
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      }
    
  }
  return (
    <div>
    <div className='absolute'>
      <Header />
      <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg'/>
    </div>
    <div>
      <form onSubmit={(e) => e.preventDefault()}  className='bg-black w-3/12 m-36 mx-auto p-12 right-0 left-0 absolute  bg-opacity-75'>
        <h4 className='font-bold text-white text-lg '>
          {isSignIn? "Sign In" : "Sign Up"}
        </h4>
        <h1 className='text-white font-bold'>This is a Personal site for Netflix GPT.</h1>
        <h1 className='text-white font-bold'>Note: Do not provide you credentials for Netflix</h1>
        {!isSignIn && <input type='text' placeholder='Full Name' className='p-3 m-3 w-11/12 rounded-md bg-gray-700' />}
        <input ref={email} type='text' placeholder='Email Address' className='p-3 m-3 w-11/12 rounded-md bg-gray-700' />
        <input ref={password} type='password' placeholder='Password' className='p-3 m-4 w-11/12 rounded-md bg-gray-700' />
        <button className='p-3 m-4 w-11/12 bg-red-700 rounded-md' onClick={validateForm}>{isSignIn?"Sign In":"Sign Up"}</button>
        <h4 className='text-white cursor-pointer' onClick={()=>{
          toggleSignInForm()
        }}>{isSignIn?"New to Netflix! Sign Up":"Already Registered! Sign In"}</h4>
        <p className='font-bold text-red-600 text-sm'>{signinerror}</p>
      </form>
    </div>
    </div>
  )
}

export default Login; 