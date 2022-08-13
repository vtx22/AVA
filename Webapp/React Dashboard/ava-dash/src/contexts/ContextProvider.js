import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState =
{
   userProfile: false,
   notification: false,
   loggedIn: false,
}

export const ContextProvider = ({ children }) => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setCurrentColor] = useState('bg-cyan-500');
   const [currentMode, setCurrentMode] = useState('Dark');
   const [themeSettings, setThemeSettings] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [falseCred, setFalseCred] = useState(false);
   const [loggedInUser, setLoggedInUser] = useState('');


   const handleClick = (clicked, state) => {
      setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });
   }

   const handleLogout = () => {
      localStorage.setItem('loggedInUser', '');
      setIsSubmitted(false);
      setIsClicked({ ...initialState, 'userProfile': false });
   }


   const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
   }

   const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
   }

   return (
      <StateContext.Provider value={{
         activeMenu, setActiveMenu,
         isClicked, setIsClicked, handleClick,
         screenSize, setScreenSize,
         currentColor, setColor, setCurrentColor,
         currentMode, setMode, setCurrentMode,
         themeSettings, setThemeSettings,
         isSubmitted, setIsSubmitted, handleLogout,
         falseCred, setFalseCred,
         loggedInUser, setLoggedInUser,
      }}>
         {children}
      </StateContext.Provider>
   )
}

export const useStateContext = () => useContext(StateContext);