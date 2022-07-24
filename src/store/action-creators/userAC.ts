import {Dispatch} from "redux";
import axios from "axios";
import { UserActionTypes, UserAction } from "../../types/user";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type:UserActionTypes.FETCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch {
            dispatch({type:UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке пользователей'})
        }
    }
}
export {}