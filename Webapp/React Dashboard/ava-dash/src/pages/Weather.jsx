import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { Button } from '../components'

const Weather = () => {
   const { currentColor } = useStateContext();
   return (
      <div className='pt-20 sm:pt-5'>
         <div className='md:pl-10 pl-5 dark:text-gray-400 font-bold text-2xl '>
            Outside
         </div>
         <div className='flex flex-wrap lg:flex-nowrap justify-center pt-1'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-44 h-44 rounded-xl w-full p-8 pt-9 m-3 drop-shadow-xl'>
               <div className='flex justify-between items-center'></div>
               <div>
                  <p className='font-bold text-4xl text-center'>23.1°C</p>
                  <p className='text-center mt-2'>+0.3°C</p>
                  <p className='text-gray-400 mt-6 text-center'>Temperature</p>
               </div>
            </div>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-44 h-44 rounded-xl w-full p-8 pt-9 m-3 drop-shadow-xl'>
               <div className='flex justify-between items-center'></div>
               <div>
                  <p className='font-bold text-4xl text-center'>69%</p>
                  <p className='text-center mt-2'>+2%</p>
                  <p className='text-gray-400 mt-6 text-center'>Humidity</p>
               </div>
            </div>

         </div>
         <div className='mt-10 grid grid-rows-1 divide-y mx-auto place-items-center'>

            <span className={`h-0.5 w-5/6 ${currentColor}`}></span>

         </div>
         <div>

         </div>

      </div >
   )
}

export default Weather