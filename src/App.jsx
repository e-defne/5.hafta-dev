import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from "./Components/AboutMe";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App-container'>
        <AboutMe/>
        
      
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="" />
    
      </div>
      <p className="read-the-docs">
        :)
      </p>
    </>
  )
}

export default App
