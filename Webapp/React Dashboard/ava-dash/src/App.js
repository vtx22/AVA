import React, { useState } from 'react';

import { users, loginErrors } from './data/users.js'
import { MainPage, Login } from './pages'

import './App.css'
import { useStateContext } from './contexts/ContextProvider.js';



const App = () => {

   const renderLogin = (<Login></Login>);
   const renderMain = (<MainPage></MainPage>);
   const { isSubmitted } = useStateContext();

   return (
      isSubmitted ? renderMain : renderLogin
   )
}

export default App