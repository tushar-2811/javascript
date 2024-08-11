import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import HeaderWithButton from "./components/HeaderWithButton"
import Todos from "./components/Todos"

function App() {
  return (
    <>
     <HeaderWithButton givenTitle={"Harkirat"} /> 
     <Header title={"Tushar"} />

     <Wrapper>
       <h1>Hello World</h1>
       <p>This is not the world, I had in Mind</p>
     </Wrapper>

 
       <Todos/>
 
    </>
  )
}

export default App
