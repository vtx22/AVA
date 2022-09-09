import React, { useState } from 'react'
import axios from 'axios'

import { useStateContext } from '../contexts/ContextProvider'
import { Button } from '../components'


const baseURL = 'https://api.darksky.net/forecast/928d1a5879a69c664abf9c3966e48eee/51.869157,9.806022?units=si&exclude=minutely,hourly,daily,alerts,flags'

function roundedToFixed(input, digits) {
   var rounded = Math.pow(10, digits);
   return (Math.round(input * rounded) / rounded).toFixed(digits);
}


const Weather = () => {
   const { currentColor } = useStateContext();
   const [temp, setTemp] = useState(null);
   const [hum, setHum] = useState(null);
   /*
   React.useEffect(() => {
      const interval = setInterval(() => {
         axios.get(baseURL

         ).then(res => {
            setTemp(roundedToFixed(res.data.currently.temperature, 1));
            setHum(res.data.currently.humidity * 100)
            console.log("Req...")
         })
      }, 5000);
      return () => clearInterval(interval);
   }, []);
   */

   return (
      <div className='pt-20 sm:pt-5'>
         <div className='md:pl-10 pl-5 dark:text-gray-400 font-bold text-2xl '>
            Outside
         </div>
         <div className='flex flex-wrap lg:flex-nowrap justify-center pt-1'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-44 h-44 rounded-xl w-full p-8 pt-9 m-3 drop-shadow-xl'>
               <div className='flex justify-between items-center'></div>
               <div>
                  <p className='font-bold text-4xl text-center'>{temp}°C</p>
                  <p className='text-center mt-2'>+0.3°C</p>
                  <p className='text-gray-400 mt-6 text-center'>Temperature</p>
               </div>
            </div>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-44 h-44 rounded-xl w-full p-8 pt-9 m-3 drop-shadow-xl'>
               <div className='flex justify-between items-center'></div>
               <div>
                  <p className='font-bold text-4xl text-center'>{hum}%</p>
                  <p className='text-center mt-2'>+2%</p>
                  <p className='text-gray-400 mt-6 text-center'>Humidity</p>
               </div>
            </div>

         </div>
         <div className='mt-10 grid grid-rows-1 divide-y mx-auto place-items-center'>

            <span className={`h-0.5 w-5/6 ${currentColor}`}></span>

         </div>
         <div className='mt-10 grid grid-rows-1 place-items-center'>
            <iframe className='w-4/5 h-96' src="https://www.rainviewer.com/map.html?loc=49.6235,11.1199,12&oFa=0&oC=1&oU=0&oCS=1&oF=1&oAP=0&c=7&o=83&lm=1&layer=radar&sm=1&sn=1&undefined=1"></iframe>
         </div>
         <div>

         </div>

      </div >
   )
}

export default Weather