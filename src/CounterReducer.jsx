import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'shahid',
  initialState: {
    value: '',
  },
  reducers: {
    changevalue: (state, action) => {
      state.value = action.payload
    },
  },
})
export const { changevalue } = counterSlice.actions

export const counterReducer = counterSlice.reducer
