//! Standard way of using Redux

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux'

// //* Store = globallized state

// //? Action = describes what you want done (function that returns an object)

// const incrememnt = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrememnt = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //* Reducer = checks Action and modifies Store accordingly

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(counter)

// // display store in console
// store.subscribe(() => console.log(store.getState()))

// //! Dispatch = executes Action function(s)
// store.dispatch(incrememnt())


//******************** Using React-Redux/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import allReducers from './reducers/allReducers'
import { Provider } from 'react-redux'



const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
