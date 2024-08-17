import { useState } from 'react'
import Header from './components/Header'
import { CountContext } from '../contexts/CountContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count , setCount}}>
      <Header/>
      </CountContext.Provider>
    </>
  )
}

export default App
