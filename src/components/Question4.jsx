import React, { useReducer } from 'react'


  
  const initialstate=0;
const reducer=(state, action)=>{
    switch(action){
        case 'inc':
            return state+1;
        case 'dec':
            return state-1;
        case 'reset':
            return initialstate;
        default:
            return state;
    }
}
const Question4=()=>{
    const[count,dispatch]=useReducer(reducer,initialstate)

  

    return(
        
        <div className='fourthHead'>
      <pre>
      Question 4: What is UseReducer Hook ?(Implementation)?
        <h4>useReducer:</h4>
        <p>The useReducer Hook is similar to the useState Hook.It allows for custom state logic.</p>
       <p> If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>
       <p>useReducer(reducer, initialState)</p>
       <p>The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.</p>
       <p>The useReducer Hook returns the current stateand a dispatchmethod.</p>
       
        <h3>Count:{count}</h3>
        <button onClick={()=>dispatch('inc')}>INCRIMENT</button>
        <button onClick={()=>dispatch('dec')}>DECREMENT</button>
        <button onClick={()=>dispatch('reset')}>RESET</button>

        </pre><hr width='200%' />
    </div>
    )
}
     
  


export default Question4