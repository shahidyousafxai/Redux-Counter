import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from './CounterReducer'
import { changetext, changevalue } from './CounterReducer'

const Counter = () => {
  // const count = useSelector((state) => state.counter.count)
  const text = useSelector((state) => state.counter.text)
  const value = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <div className='flex flex-col h-[90vh] justify-center items-center'>
      {/* <button
        className='bg-sky-600 rounded text-white py-1 px-2'
        onClick={() => dispatch(increment())}
        >
        Increment
        </button>{' '}
      <p className='mx-2'>{count}</p> */}
      <div className='flex'>
        <input
          type='text'
          className='rounded outline-0 border border-slate-700 py-1 mr-2 indent-1'
          value={text}
          onChange={(e) => dispatch(changetext(e.target.value))}
        />
        <button
          className='bg-sky-600 rounded text-white py-1 px-2'
          onClick={() => {
            dispatch(changevalue(text))
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default Counter
