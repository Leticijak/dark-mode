import React from "react"
import "./Hero.scss"
const Hero = (props) => {
  return (
    <div className={props.darkMode ? "hero dark" : "hero"}>
      <h1 className='hero-text'>
        Welcome to the {props.darkMode ? " 🌕 " : " 🌻 "} mode
      </h1>
    </div>
  )
}

export default Hero
