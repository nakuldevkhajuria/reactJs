import React from 'react'
import { useState } from 'react'
import './Styles.css'
function Question2() {

  const [count, setCount]  = useState(0);

  return (
    <div className='secondHead'>
      
        <pre>
        Question 2: What is UseState Hook ?(Implementation)
        <br />
        <br />
        <button onClick={() => {setCount(count+1)}}>Increment</button>
                               <div>{count}</div> 
        <button onClick={() => {setCount(count-1)}}>Decrement</button>
<br />
        We are using UseState, when we click, event takes place,
        given as parameter for onClick.
         which is changing the counter value,<br />
        everytime we increment or decrement.
      We are using setCount to change the state.
      this, step is different for class components also.
      <br /><br />
      


       
        
        </pre><hr width='200%' /></div>
  )
}

export default Question2