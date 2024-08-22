import { selector } from "recoil";
import { filterState, todoState } from "../atoms/todo";

export const filterTodoState = selector({
    key : "filterTodoState",
    get : ({get}) => {
        const todos = get(todoState);
        const filter = get(filterState);

        return todos.filter((todo) => todo.title === filter)
    }
})