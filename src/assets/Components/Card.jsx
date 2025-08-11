import React from 'react'
import photo from "../../assets/react.svg"
import { useState } from 'react'

const Card = () => {
    const [readDisplay, setReadDisplay] = useState(true)
    const handleText = () => {
        setReadDisplay(!readDisplay)
    }
    const detail = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique voluptate totam suscipit adipisci, qui eos voluptatibus quidem libero ea velit beatae quaerat facere modi culpa deserunt aut nulla assumenda!`;
    const lessDetails  = `${detail.slice(0,100)}...`
  return (
    <>
      <div className="card">
        <img src={photo} alt="" />
        <h2>React Components</h2>
        <p>
            {readDisplay ? lessDetails : detail}
        </p>
        
        <button onClick={handleText}>
            {readDisplay ? "Read More" : "Read Less"}
        </button>
        
      </div>
    </>
  )
}

export default Card
