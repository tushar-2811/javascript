import React, { useEffect, useRef, useState } from 'react'

const IncomeTax = () => {
      const[income , setIncome] = useState(20000);
      const h1Ref = useRef();

    useEffect(() => {
        setTimeout(() => {
            // document.getElementById("incomeContainer").innerHTML = 20;
            h1Ref.current.innerHTML = 10;
        },5000)
    },[])


  return (
    <div>
        <h1 id='incomeContainer' ref={h1Ref} > {income} </h1>
    </div>
  )
}

export default IncomeTax
