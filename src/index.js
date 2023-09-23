import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from "redux"

const root = ReactDOM.createRoot(document.getElementById('root'));

const reducer = (state, action) =>{


    console.log(action);

    if (action.type === "change") {
        return state + 1
    }

    return 0
}
 
const store = createStore(reducer)

root.render( 
    <Provider store={store}> 
     <App />
    </Provider>
);



