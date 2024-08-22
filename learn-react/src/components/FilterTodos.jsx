import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filterState } from '../store/atoms/todo'
import { filterTodoState } from '../store/selectors/filterTodo';

let id = 1;

const FilterTodos = () => {
     const [filterTodo , setFilterTodo] = useRecoilState(filterState);
     const filterTodoS = useRecoilValue(filterTodoState);
  return (
    <div>
        <h1>Find todos</h1>
      <input type="text" placeholder='Enter title' value={filterTodo} onChange={(e) => setFilterTodo(e.target.value)} />
     {
        filterTodoS.map((todo) => {
            return <div key={id++}>
                 <h1> {todo.title} </h1>
                 <p> {todo.description} </p>
                 </div>
        })
     }
    </div>
  )
}

export default FilterTodos
