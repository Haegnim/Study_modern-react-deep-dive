import React from 'react'
import {useCounter} from './5-2.1.useState-ans-useReducer';


// 훅으로 코드를 격리해 제공할 수 있다는 장점
export function Counter1() {
  const { inc, counter } = useCounter();

  return (
    <>
    <h3>5-2.1 useState</h3>
    <div>{counter}</div>
    <button onClick={inc}>5-2.1 useState</button>
    </>
  )
}

export function Counter2() {
  const { inc, counter } = useCounter();

  return (
    <>
    <h3>5-2.1 useState</h3>
    <div>{counter}</div>
    <button onClick={inc}>5-2.1 useState</button>
    </>
  )
}
