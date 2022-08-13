import React, { useState } from 'react'
import { users, loginErrors } from '../data/users.js'
import logo from '../data/ava_logo_boxed.png'
import { useStateContext } from '../contexts/ContextProvider.js';


const Login = () => {
   const [errorMessages, setErrorMessages] = useState({});
   const { isSubmitted, setIsSubmitted, falseCred, setFalseCred, loggedInUser, setLoggedInUser, handleClick } = useStateContext();

   var storedName = localStorage.getItem('loggedInUser');
   const userSet = users.find((user) => user.name === storedName);

   if (userSet) {
      setIsSubmitted(true);
      setLoggedInUser(storedName);
      setFalseCred(false);
   }

   const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();


      var uname = document.getElementById('loginForm').elements['uname'].value;
      var pass = document.getElementById('loginForm').elements['pass'].value;
      // Find user login info
      const userData = users.find((user) => user.name === uname);

      // Compare user info
      if (userData) {

         if (userData.password !== pass && uname !== localStorage.getItem('loggedInUser')) {
            // Invalid password
            setFalseCred(true);
         } else {
            setIsSubmitted(true);
            localStorage.setItem('loggedInUser', uname);
            setLoggedInUser(uname);
            setFalseCred(false);

         }
      } else {
         // Username not found
         setFalseCred(true);
      }
   };
   return (

      <div className='flex flex-wrap flex-col justify-center content-center items-center bg-gradient-to-tr from-[#0b002e] to-[#003a40] h-screen'>
         <form id='loginForm' className='form flex flex-wrap flex-col justify-center content-center items-center mt-20 mb-0 p-5'>
            <h1 className='text-white font-bold text-4xl'>Login</h1>
            <input type="text" placeholder="Username" id="uname" className='bg-[rgba(0,0,0,0.3)] border-1 border-[rgba(0,0,0,0.5)] pl-3 mt-6 h-10 w-80 text-white display-block' />
            <input type="password" placeholder="Password" id="pass" className='bg-[rgba(0,0,0,0.3)] border-1 border-[rgba(0,0,0,0.5)] pl-3 mt-6 h-10 w-80 text-white display-block' />
            <button onClick={handleSubmit} className='mt-10 w-80 border-2  hover:drop-shadow-xl hover:bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-500 p-3 text-white uppercase'>Login</button>
         </form>
         {falseCred && <div className='text-white pr-4 pl-4 p-2 bg-[rgba(255,0,0,0.3)] border-red-500 rounded-lg border-1 '>
            Error: Invalid username or password!
         </div>}
         <div className='mb-10 mt-auto'>
            <img src={logo} className='w-20 animate-pulse'></img>
         </div>



      </div>


   )
}

export default Login