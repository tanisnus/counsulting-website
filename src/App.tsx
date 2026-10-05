import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500">
          Hello Tailwind!
          </h1>
      </div>
    </>
  )
}

export default App
