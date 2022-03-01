import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
    </>
  )
}

export default App
