import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';

import { Home, Weather, Users, Devices, Cameras, Energy } from './';

import { useStateContext } from '../contexts/ContextProvider';

const MainPage = () => {

   const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, setCurrentColor, setCurrentMode } = useStateContext();

   useEffect(() => {
      const currentThemeColor = localStorage.getItem('colorMode');
      const currentThemeMode = localStorage.getItem('themeMode');
      if (currentThemeColor && currentThemeMode) {
         setCurrentColor(currentThemeColor);
         setCurrentMode(currentThemeMode);
      }
   }, []);

   return (
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
         <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
               <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
                  <TooltipComponent content="Settings" position="Top">
                     <button type='button' className={`text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white ${currentColor}`} style={{ borderRadius: '50%' }} onClick={() => setThemeSettings(true)}>
                        <FiSettings />
                     </button>
                  </TooltipComponent>
               </div>
               {activeMenu ? (
                  <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                     <Sidebar />
                  </div>
               ) : (
                  <div className='w-0 dark:bg-secondary-dark-bg'>
                     <Sidebar />
                  </div>
               )}
               <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                  <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                     <Navbar />
                  </div>


                  <div>
                     {themeSettings && <ThemeSettings />}

                     <Routes>
                  /* Default redirects. Needed so that initially home isActive is set and the background color is visible */
                        <Route path="*" element={<Navigate to="/home" />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                  /* Site routes */
                        <Route path="/home" element={<Home />} />
                        <Route path="/weather" element={<Weather />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/devices" element={<Devices />} />
                        <Route path="/cameras" element={<Cameras />} />
                        <Route path="/energy" element={<Energy />} />
                     </Routes>

                  </div>
               </div>
            </div>
         </BrowserRouter>


      </div>

   )
}

export default MainPage