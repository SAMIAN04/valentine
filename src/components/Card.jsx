import React from 'react'
import Button from './Button'
import Question from './Question'
const images = {
  question :'/public/heyy.gif'
}

const Card = ({ bgColor = 'bg-pink-100', text = <Question/>, onClick, Button = <Button/>,Button2 = <Button/>, gif }) => {

  return (
  <div className='w-97.5 justify-center'>
    <div
      className={`p-5 rounded-lg shadow-md ${bgColor} ${onClick ? 'cursor-pointer' : ''}  justify-center items-center content-center text-xl`}
      onClick={onClick}
    >
      {text}
     
      {gif && (
        <div className="mt-4 flex justify-center">
          <img src={gif} alt="card gif" className="max-h-30 rounded" />
        </div>
      )}
       
      </div>
      <div className=' mt-4 flex justify-center gap-10'>
        {Button}
        {Button2}
      </div>
      </div>
  )
}

export default Card