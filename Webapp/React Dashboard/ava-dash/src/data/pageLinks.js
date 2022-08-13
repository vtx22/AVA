import React from 'react';

import { WiDayCloudy } from 'react-icons/wi';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { RiDeviceLine } from 'react-icons/ri';
import { MdBolt } from 'react-icons/md';
import { HiOutlineVideoCamera } from 'react-icons/hi'

export const links = [
   {
      title: 'Dashboard',
      links: [
         {
            name: 'home',
            icon: <AiOutlineHome />,
         },
      ],
   },

   {
      title: 'Apps',
      links: [
         {
            name: 'cameras',
            icon: <HiOutlineVideoCamera />,
         },
         {
            name: 'weather',
            icon: <WiDayCloudy />,
         },
         {
            name: 'packages',
            icon: <GoPackage />,
         },
         {
            name: 'energy',
            icon: <MdBolt />,
         },
      ],
   },
   {
      title: 'Management',
      links: [
         {
            name: 'users',
            icon: <AiOutlineUser />,
         },
         {
            name: 'devices',
            icon: <RiDeviceLine />,
         },
      ],
   },
];