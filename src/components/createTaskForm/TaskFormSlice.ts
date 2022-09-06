import { createSlice } from '@reduxjs/toolkit'
import { TaskObject } from '../types/objects'



const initialState = {
  tasks: [] as Array<TaskObject>
  }


  export const TaskFormSlice = createSlice({
    name: 'TaskFormSlice',
    initialState,
    reducers: {
        clearState: () => initialState,
        createTask: (state, action) =>{
          const task = action.payload
          state.tasks.push(task)
        },
        deleteTask: (state, action) =>{
            const actionTask= action.payload.id
            return{
              ...state,
              tasks: state.tasks.filter(
                ({ id }) => id !== actionTask
              )
            }
        }
        

    }

  })

  export const {clearState, createTask, deleteTask } =  TaskFormSlice.actions
  export default TaskFormSlice.reducer

