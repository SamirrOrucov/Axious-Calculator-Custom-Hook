import React, { useState } from 'react'
import useCounter from '../hook/useCounter'
function Counter() {
    const [count1, increase1,decrease1] = useCounter(0)
    const [count2, increase2,decrease2] = useCounter(0)

  return (
    <>
    <h1>{count1}</h1>
    <button onClick={increase1}>+</button>
    <button onClick={decrease1}>-</button>
    <hr />
    <h1>{count2}</h1>
    <button onClick={increase2}>+</button>
    <button onClick={decrease2}>-</button>
    <hr />
    </>
  )
}

export default Counter