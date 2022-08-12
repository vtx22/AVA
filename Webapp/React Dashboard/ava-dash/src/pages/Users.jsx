import React from 'react'

import { Button } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

import { users } from '../data/users'

const Users = () => {
   const { currentColor } = useStateContext();
   return (
      <div className='ms:mt-20 md:mt-15 '>
         <div className='flex flex-wrap flex-cols justify-center'>
            <div className='md:w-5/6 w-full'>
               {users.map((user) => (
                  <div key={user.name} className='bg-white text-gray-200 dark:bg-secondary-dark-bg h-15 rounded-xl mt-5 pl-5 pr-5 pt-2 pb-2'>
                     <div className='flex flex-wrap items-center'>
                        <img className="rounded-full h-7 w-7" src={user.avatar} />
                        <p className='ml-5 text-xl font-bold text-capitalize'>{user.name}</p>
                        <p className='ml-5 text-xl dark:text-gray-400 capitalize'>({user.type})</p>
                        <div className='ml-auto mr-0 align-middle'>
                           <Button bgColor={currentColor} color='white' size='md' borderRadius='10px' text='Edit' />
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>
   )
}

export default Users