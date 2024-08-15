import React, { useEffect, useRef } from 'react'

const Assignment = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    },[])
    const handleOnClick = () => {
        inputRef.current.focus();
    }
  return (
    <div>
       <input type="text" placeholder='Enter Text Here' ref={inputRef} />
       <button onClick={handleOnClick} >Focus Input</button>
    </div>
  )
}

export default Assignment
