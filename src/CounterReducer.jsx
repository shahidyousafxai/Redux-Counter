import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'shahid',
  initialState: {
    // count: 0,
    value: '',
  },
  reducers: {
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
export const { changevalue } = counterSlice.actions

export const counterReducer = counterSlice.reducer
