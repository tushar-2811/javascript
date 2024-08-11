import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos , setTodos] = useState([]);
    useEffect(() => {
        async function getData(){
            const response = await fetch("https://sum-server.100xdevs.com/todos" , {
                method : "GET"
            });

            const json = await response.json();
            console.log(json.todos);
            setTodos(json.todos);
        }
        getData();
    },[])

    async function handleUpdate(){
        const response = await fetch("https://sum-server.100xdevs.com/todos" , {
            method : "GET"
        });

        const json = await response.json();
        setTodos(json.todos);
    }

    async function handleRemoveTodo(id) {
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }))
    }
  return (
    <>
    <button onClick={handleUpdate} >Update Todos</button>
       {
         todos.map((todo) => (
            <div key={todo.id} >
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>
                <button onClick={() => handleRemoveTodo(todo.id)} >Remove Todo</button>
            </div>
         ))
       }
    </>
  )
}

export default Todos
