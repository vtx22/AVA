import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
   return (
      <button type='button' style={{ color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl ${bgColor}`}>
         {text}
      </button>
   )
}

export default Button