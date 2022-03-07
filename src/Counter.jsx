import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './CounterReducer'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)

  const dispatch = useDispatch()
  return (
    <div className='flex h-[90vh] justify-center items-center'>
      <button
        className='bg-sky-600 rounded text-white py-1 px-2'
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <p className='mx-2'>{count}</p>
      <button
        className='bg-sky-600 rounded text-white py-1 px-2'
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
