import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Qoute from './components/qoute'
import Carroussel from './components/carroussel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Qoute/>
      <Carroussel/>
      </div>       
  

    
  )
}

export default App
