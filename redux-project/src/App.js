import React from 'react';
import{incNumber,decNumber} from './action/index'
import './App.css';


import {useSelector , useDispatch} from 'react-redux'
const App = () => {
  const myState = useSelector((state)=>state.chanageTheNumber)
  const dispatch = useDispatch()
  return (
    <>

      <div className="container">
        <h1> Increment/Decrement counter </h1>
        <h3> Using Redux </h3>

        <div className="quantity">
          <a className="quantity-minus" title="decrement" onClick = { () => dispatch(decNumber())}> <span> - </span> </a>
          <input name="quantity" type="text" className="input" value={myState}></input>
          <a className="quantity-plus" title="increment"onClick= {()=>dispatch(incNumber())}> <span> + </span> </a>

        </div>
      </div>

    </>
  )
}
export default App;
