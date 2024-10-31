import React from 'react'

function Card(props) {
  const {link}=props
  const {name,url,logo}=link
  return (
    <div className=' w-52 h-52 rounded-lg border-2 border-red-600 flex flex-col justify-center items-center p-2 gap-y-4'>
      <div>
        <img src={logo} className='w-28 h-24 rounded-full'></img>
      </div>
      <div onClick={e=>window.open(url)} className='border-2 border-red-600 rounded-lg p-2 text-center w-44 bg-black text-white'>
        <a href={url} target="_blank">{name}</a>
      </div>
      <div>
      </div>

    </div>
  )
}

export default Card