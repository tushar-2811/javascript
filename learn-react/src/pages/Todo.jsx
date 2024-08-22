import React , {useState} from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from '../store/atoms/todo'
import FilterTodos from '../components/FilterTodos';

let id = 1;

const Todo = () => {
    const [details , setDetails] = useState({
        title : "",
        description : ""
    }); 
    const [todo , setTodo] = useRecoilState(todoState);

    function handleOnChange(e) {
       setDetails((prev) => ({
        ...prev ,
        [e.target.name] : e.target.value
       }))
    }

    function handleSubmit(){
        setTodo([...todo , details]);
        setDetails({
            title : "",
            description : ""
        })
      
    }
  return (
    <div>
      <h1>My Todo Page</h1>

      <div>
          <input type="text" value={details.title} placeholder='title' name='title' onChange={handleOnChange} required />
          <input type="text" value={details.description} placeholder='description' name='description' onChange={handleOnChange} required />

          <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        {
            todo.map((single) => {
                return <div key={id++} > 
                    <h1> {single.title} </h1>
                    <p> {single.description} </p>
                </div>
            })
        }
      </div>

      <div>
        <FilterTodos/>
      </div>
    </div>
  )
}

export default Todo
