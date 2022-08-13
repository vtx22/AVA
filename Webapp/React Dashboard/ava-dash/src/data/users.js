import React from 'react';

import defaultAvatar from '../data/logoSingleWhite.png'

export const users = [
   {
      name: 'Fynn',
      password: '12345',
      type: 'admin',
      avatar: defaultAvatar,
   },
   {
      name: 'Jan',
      password: '12345',
      type: 'huso',
      avatar: defaultAvatar,
   },


];

export const loginErrors = {
   uname: "invalid username",
   pass: "invalid password"
};