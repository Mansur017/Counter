import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from "redux"

const root = ReactDOM.createRoot(document.getElementById('root'));


const initialState = 0;

const reducer = (state = initialState, action) =>{

  switch(action.type){
    case "plus":
      return state + 1;
    case "minus":
      if (state >= 1) {
        return state - 1
      }
    case "reset":
      return 0

      default:
        return state
  }
}
 
const store = createStore(reducer)

root.render( 
    <Provider store={store}> 
     <App />
    </Provider>
);



