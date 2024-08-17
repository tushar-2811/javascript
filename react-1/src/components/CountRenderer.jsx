import React, { useContext } from 'react'
import { CountContext } from '../../contexts/CountContext'

const CountRenderer = () => {
    const {count , setCount} = useContext(CountContext);
  return (
    <div>
     The Count is :  {count}
    </div>
  )
}

export default CountRenderer
