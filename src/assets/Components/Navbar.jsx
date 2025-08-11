import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [light, setLight] = useState(true)
  const [a_Light, set_a_Light] = useState(true)
  const [navButton_light, set_navButton_light] = useState(true)
  const handleMode = () => {
    setLight(!light)
    set_a_Light(!a_Light)
    set_navButton_light(!navButton_light)
  }
 
  return (
    <>
      <nav className={light ? "light" : "dark"}>
        <ul>
          <li>
            <Link to="/" className={a_Light ? "a_light" : "a_dark"}>Home</Link>
          </li>
          <li>
            <Link to="/todoList" className={a_Light ? "a_light" : "a_dark"}>Todo</Link>
          </li>
          <li>
            <Link to="/shop" className={a_Light ? "a_light" : "a_dark"}>Shop</Link>
          </li>
          {/* <li>
            <Link className={a_Light ? "a_light" : "a_dark"}>Services</Link>
          </li> */}
          <li>
            <Link to="/products" className={a_Light ? "a_light" : "a_dark"}>Products</Link>
          </li>
        </ul>
        <button className={navButton_light ? "nav_light" : "nav_dark"} onClick={handleMode}>
          {light ? "Dark Mode" : "Light mode"}
        </button>
      </nav>
    </>
  )
}

export default Navbar
