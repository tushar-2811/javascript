import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div style={{border : "2px solid black"}} >
       {children}
    </div>
  )
}

export default Wrapper
