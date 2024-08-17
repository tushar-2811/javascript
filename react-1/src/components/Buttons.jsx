import React, { useContext } from 'react'
import { CountContext } from '../../contexts/CountContext'

const Buttons = () => {
    const {count , setCount} = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)} >Decrese</button>
    </div>
  )
}

export default Buttons
