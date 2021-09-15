import React from 'react';
import useModel from "flooks"
import { counter } from '../store'

export default () => {
  const { count, increase, decrease } = useModel(counter);

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrease}>minus</button>
    </div>
  )
}