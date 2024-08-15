import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import HeaderWithButton from "./components/HeaderWithButton"
import Todos from "./components/Todos"
import SingleTodo from "./components/SingleTodo"
import { useState } from "react"
import IncomeTax from "./components/IncomeTax"
import Assignment from "./components/Assignment"
import Assignment2 from "./components/Assignment2"
import { MemoAssignment1 } from "./components/MemoAssignment1"
import { Memo2 } from "./components/Memo2"
import { Memo3 } from "./components/Memo3"
import { CallAssign1 } from "./components/CallAssign1"
import { CallAssign2 } from "./components/CallAssign2"

function App() {
  // const [id , setId] = useState(1);

  // function handleOnClick(id){
  //   setId(id);
  // }
  return (
    <>
     {/* <HeaderWithButton givenTitle={"Harkirat"} /> 
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
       <IncomeTax/> */}

       {/* <Assignment/>
       <Assignment2/> */}
       {/* <MemoAssignment1/> */}
      {/* <Memo2/> */}

       {/* <Memo3/> */}

       {/* <CallAssign1/> */}
       <CallAssign2/>
    </>
  )
}

export default App
