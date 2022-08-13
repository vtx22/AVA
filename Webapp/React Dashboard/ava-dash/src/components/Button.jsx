import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, onClickFunc }) => {
   return (
      <button type='button' style={{ color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl ${bgColor}`} onClick={onClickFunc}>
         {text}
      </button>
   )
}

export default Button