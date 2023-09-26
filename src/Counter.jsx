import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  const plus = () => {
    dispatch({ type: 'plus' });
  };

  const minus = () => {
    dispatch({ type: 'minus' });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="Counter">
      <div>{count}</div>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
