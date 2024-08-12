import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'

const SingleTodo = ({id}) => {
    const [todo , setTodo] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            setTodo(response.data.todo);
        }
        getData();
    },[id])
  return (
    <div>
        <h1>{todo.title}</h1>
        <h3>{todo.description}</h3>
    </div>
  )
}

export default SingleTodo
