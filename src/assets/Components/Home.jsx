import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import Card from './Card'
import { useState, useRef, useEffect } from 'react'
import Card2 from './Card2'
// import React, { useEffect, useRef, useState } from 'react'


const Home = () => {
    const [urName, setUrName] = useState("")
    const [showContent, setShowContent] = useState(false)
    const prompted = useRef(false); 

    useEffect(() => {
        if(!prompted.current){
        prompted.current = true
        const userName = prompt("Enter your name")
        if(userName != ""){
            setUrName(userName)
            setShowContent(true)
        }
        else{
            setShowContent(false)
        }
        }
    }, [])

  return (
    <div>
      <div className='contain'>
      
          {showContent ? (
           
            
                <div>
                  <Hero/>
                  <br />
                  <div className="cards-flex">
                    <Card2 title="For Developers" desc="Browse our React jobs and start your career today"/>
                    <Card2 title="For Employers" desc="Browse our React jobs and start your career today"/>
                  </div>
                  <h1>Hello, {urName}</h1>
                  <div className="container">
                    <div className="card_container">
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                    </div>
                  </div>
                   <p>
                      <Link to="/todoList">Show Todo List</Link>
                    </p>
                </div>
              
              
          
        
            ) : (
              <div className='error'>
                <h2>Error ❌<br /> Refresh the page to enter your name to show website content</h2>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Home
