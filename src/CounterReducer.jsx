import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'shahid',
  initialState: {
    // count: 0,
    text: '',
    value: '',
  },
  reducers: {
    changetext: (state, action) => {
      state.text = action.payload
    },
    changevalue: (state, action) => {
      state.value = action.payload
    },
    // increment: (state) => {
    //   state.count += 1
    // },
    // decrement: (state) => {
    //   if (state.count > 0) {
    //     state.count -= 1
    //   }
    // },
  },
})

// export const { increment, decrement } = counterSlice.actions
export const { changetext, changevalue } = counterSlice.actions

export const counterReducer = counterSlice.reducer
