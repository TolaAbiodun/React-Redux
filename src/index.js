import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux';
// import allReducers from './reducers';

// Import provider to connect global store to our App 
// import {Provider} from 'react-redux';



// Combine all reducers
// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// import { createStore } from 'redux';


// // ACTION - Returns an object of actions (Increment and Decrement)

// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }


// // REDUCER - Returns Switch case statements  of Actual Logic
// const counter = (state=0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default: 
//       return state;
//   }
// }

// // STORE - GLOBALIZED VARIABLES

// const store  = createStore(counter);

// // Display in console
// store.subscribe(() => console.log(store.getState()));


// // DISPATCH - Execute actions
// store.dispatch(increment());
// store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

