import React from 'react'

const Button = ({ bgColor = 'bg-gray-100', text = 'Button', onClick }) => {
  return (
    <button 
      className={`text-gray-600 font-semibold border-none px-4 py-2 rounded-3xl cursor-pointer ${bgColor} shadow-md `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button