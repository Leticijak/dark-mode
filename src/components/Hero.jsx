import React from "react"
import "./Hero.scss"
const Hero = (props) => {
  return (
    <>
      <div className={props.darkMode ? "hero dark" : "hero"}>
        {props.darkMode ? (
          <div class='moon'>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ) : (
          <div class='sun'></div>
        )}
      </div>
    </>
  )
}

export default Hero
