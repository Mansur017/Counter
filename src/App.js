import React from 'react';
import Text from './components/Text';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const counter = useSelector(state => state)


  const dispatch = useDispatch()

  function plus(){
    dispatch({
      type: "plus"
    })
  }
  function minus(){
    dispatch({
      type: "minus"
    })
  }
  function reset(){
    dispatch({
      type: "reset"
    })
  }

  return (
    <div className="App">
      <div>
        {counter}
      </div>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default App;
