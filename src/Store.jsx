import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return state + 1;
    case 'minus':
      if (state >= 1) {
        return state - 1;
      }
    case 'reset':
      return 0;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
