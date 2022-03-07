import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './CounterReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
