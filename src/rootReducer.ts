import { combineReducers } from "@reduxjs/toolkit"
import TaskFormSlice  from "./components/createTaskForm/TaskFormSlice"


const rootReducer = combineReducers({
    TaskFormSlice: TaskFormSlice
})

export default rootReducer