import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './assets/components/Cards'
import links from './supercars'


function App() {

  const [value,setLinks]=useState(links)
  
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white'>
      <h1 className='text-4xl font-bold text-center w-[100vw] py-6'>Resources</h1>
      <Cards links={value}></Cards>
    </div>      
  )
}

export default App
