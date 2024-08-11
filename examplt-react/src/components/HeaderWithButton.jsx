import React, { useState } from 'react'
import Header from './Header';

const HeaderWithButton = ({givenTitle}) => {
    const [title , setTitle] = useState(givenTitle);
    function handleOnClick(){
        setTitle(Math.random());
    }
  return (
    <>
     <button onClick={handleOnClick}>Change title</button>
     <Header title={title} />
    </>
  )
}

export default HeaderWithButton
