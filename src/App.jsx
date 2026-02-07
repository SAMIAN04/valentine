import { useState, useEffect } from 'react'

import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Question from './components/Question'

function App() {
  const qugif = '/heyy.gif'
  const images = {
    ques : qugif
  }
  // Define your images here
 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Preload all images for smooth kisses... I mean, loading 💋
    const preload = Object.values(images).map((src) => {
      return new Promise((res) => {
        const img = new Image()
        img.src = src
        img.onload = res
        img.onerror = res
      })
    })

    Promise.all(preload).then(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-xl font-bold">
        Loading everything for you, my love... 💖
      </div>
    )
  }

  return (
    <div className=' w-[90vw] h-[90vh] mt-[2vh] flex justify-center items-center'>
     <Card text={<Question text='Heyy cutieee I have a quetion for you ' speed={80}  className='text-black'/>} Button={<Button text='okay'/>} Button2={<Button text='yess what is it???? '/>} gif={<img src="/heyy.gif" />} />
    </div>
  )
}

export default App
