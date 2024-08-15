import React, { useEffect, useRef, useState } from 'react'

const Assignment2 = () => {
    console.log("component re-render");
    const [forceRender , setForceRender] = useState(0);
    const divRef = useRef();

    useEffect(() => {
       divRef.current.innerHTML++;
    },[forceRender])

    const handleReRender = () => {
      setForceRender(Math.random());
    }
      return (
    <div>
      <h1> This component has rendered <div ref={divRef} >{0}</div> times </h1>
      <button onClick={handleReRender} >Force Re-render</button>
    </div>
  )
}

export default Assignment2
