import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChessList from './components/ChessList/ChessList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChessList/>
    </>
  )
}

export default App
