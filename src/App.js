import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, changeStatus } from './actions'

function App() {
  const countState = useSelector(state => state.countState)
  const isLoggedState = useSelector(state => state.isLoggedState)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {countState}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(changeStatus())} style={{display: 'block'}}>Change LoggedIn Status</button>
      <h2>Login Status: {isLoggedState.toString()}</h2>
    </div>
  );
}

export default App;
