import React from 'react'

import { BsCurrencyDollar } from 'react-icons/bs'

import { GoPrimitiveDot } from 'react-icons/go'

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

import { Button } from '../components'
import { users } from '../data/users'

const Home = () => {
   const { currentColor, loggedInUser } = useStateContext();
   const currentUser = users.find((user) => user.name === loggedInUser);
   return (
      <div className='mt-15'>
         <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full  p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-contain bg-right'>
               <div className='flex justify-between items-center'></div>
               <div>
                  <p className='font-bold text-gray-400'>Welcome,</p>
                  <p className='text-xl capitalize'>{currentUser.name}</p>
                  <div className='mt-6'>
                     <Button bgColor={currentColor} color='white' size='md' borderRadius='10px' text='Update' />
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Home