import {Dispatch} from "redux";
import axios from "axios";
import { TodoActionTypes, TodoAction } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type:TodoActionTypes.FETCH_TODOS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {_page: page, _limit: limit}
            })
            dispatch({type:TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch {
            dispatch({type:TodoActionTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при загрузке данных"})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODOS_PAGE, payload: page}
}

