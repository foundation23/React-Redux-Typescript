import {combineReducers} from "redux";
import { todoReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})
export type RootState = ReturnType<typeof rootReducer>