import React from 'react'

const Card2 = ({title, desc}) => {
  return (
    <div>
      <div className='card-specs'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card2
