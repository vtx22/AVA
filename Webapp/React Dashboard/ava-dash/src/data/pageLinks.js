import React from 'react';

import { WiCloud, WiDayCloudy } from 'react-icons/wi';
import { AiOutlineHome } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';

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