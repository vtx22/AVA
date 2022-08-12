import React from 'react'

import logo from '../data/ava_logo_boxed.png'

const Login = () => {
   return (
      <div className='bg-black'>
         <div>
            <form>
               <h1>Login</h1>
               <input type="text" placeholder="Username" />
               <input type="password" placeholder="Password" />
               <button>Login</button>
            </form>
         </div>
         <div>
            <img></img>
         </div>
      </div>
   )
}

export default Login