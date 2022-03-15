import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changevalue } from './CounterReducer'

const Counter = () => {
  const inputref = useRef()
  const textvalue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col h-[90vh] justify-center items-center'>
      <div className='flex'>
        <input
          type='text'
          className='rounded outline-0 border border-slate-700 py-1 mr-2 indent-1'
          ref={inputref}
        />
        <button
          className='bg-sky-600 rounded text-white py-1 px-2'
          onClick={() => {
            const inputvalue = inputref.current.value
            console.log(inputvalue)
            dispatch(changevalue(inputvalue))
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <p>{textvalue}</p>
      </div>
    </div>
  )
}

export default Counter
