import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState =
{
   userProfile: false,
   notification: false,
}

export const ContextProvider = ({ children }) => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setCurrentColor] = useState('bg-cyan-500');
   const [currentMode, setCurrentMode] = useState('Dark');
   const [themeSettings, setThemeSettings] = useState(false);

   const handleClick = (clicked) => {
      setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });
   }

   const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
      //setThemeSettings(false);
   }

   const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
      //setThemeSettings(false);
   }

   return (
      <StateContext.Provider value={{
         activeMenu, setActiveMenu,
         isClicked, setIsClicked, handleClick,
         screenSize, setScreenSize,
         currentColor, setColor, setCurrentColor,
         currentMode, setMode, setCurrentMode,
         themeSettings, setThemeSettings,
      }}>
         {children}
      </StateContext.Provider>
   )
}

export const useStateContext = () => useContext(StateContext);