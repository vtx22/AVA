import React from 'react';

import { WiDayCloudy } from 'react-icons/wi';
import { AiOutlineHome } from 'react-icons/ai';

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
            name: 'weather',
            icon: <WiDayCloudy />,
         },
      ],
   },
];