import React from 'react'
import Card from './Card'

function Cards(props) {

  const { links } = props


  return (
    <div className='flex flex-wrap gap-x-6 gap-y-6 justify-center items-center'>
      {
        links.map((link)=>{
          return <Card link={link} key={link.name}></Card>
        })
      }
    </div>
  )
}

export default Cards