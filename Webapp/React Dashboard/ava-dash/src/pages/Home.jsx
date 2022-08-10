import React from 'react'

import { BsCurrencyDollar } from 'react-icons/bs'

import { GoPrimitiveDot } from 'react-icons/go'

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const Home = () => {
   return (
      <div className='mt-12'>
         <div className='flex -flex-wrap lg:flex-nowrap justify-center'>
            <div className='bg-white dark:text-grey-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
               Home
            </div>
         </div>
      </div>
   )
}

export default Home