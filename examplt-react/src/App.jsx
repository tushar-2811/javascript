import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import HeaderWithButton from "./components/HeaderWithButton"
import Todos from "./components/Todos"
import SingleTodo from "./components/SingleTodo"
import { useState } from "react"
import IncomeTax from "./components/IncomeTax"

function App() {
  const [id , setId] = useState(1);

  function handleOnClick(id){
    setId(id);
  }
  return (
    <>
     <HeaderWithButton givenTitle={"Harkirat"} /> 
     <Header title={"Tushar"} />

     <Wrapper>
       <h1>Hello World</h1>
       <p>This is not the world, I had in Mind</p>
     </Wrapper>

 
       <Todos/>
       <h1>Single Todo Here ********* </h1>

       <button onClick={(e) => handleOnClick(e.target.value)} value={1} >1</button>
       <button onClick={(e) => handleOnClick(e.target.value)} value={2} > 2</button>
       <button onClick={(e) => handleOnClick(e.target.value)} value={3}>3</button>

       <SingleTodo id={id} />

       <h1>Hello</h1>
       <IncomeTax/>
 
    </>
  )
}

export default App
