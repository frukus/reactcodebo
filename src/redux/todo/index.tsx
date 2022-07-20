import { createSlice } from '@reduxjs/toolkit'
import { TODO_BD } from '../../data/Todo'
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoData: TODO_BD
  },
  reducers: {
    // addTask:(state: any, actions: any) =>{},
    // removeTask:(state: any, actions: any) =>{},
    // editTask:(state: any, actions: any) =>{},
  }
})
// export const {} = todoSlice.actions
export default todoSlice.reducer
