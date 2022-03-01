import React from "react"
import "./Navbar.scss"

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "navigation dark" : "navigation"}>
      <div>
        <img className='logo' src='./bluefav.png' />
      </div>
      <ul className='links'>
        <label class='switch'>
          <input type='checkbox' onClick={props.toggleDarkMode} />
          <span class='slider round'></span>
        </label>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Services</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
