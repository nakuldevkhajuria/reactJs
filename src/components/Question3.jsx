import React, { useEffect, useState } from 'react'

function Question3() {
    
  const [count, setCount]  = useState(0);
  const [name,setName] = useState(0);
  useEffect(() => 
{
  console.log('You got one Like')}
    // return () => {
    //   second
    // }
  ,[count]
  )
  useEffect(() => 
  {
    console.log('You lost one Like')}
      // return () => {
      //   second
      // }
    ,[name]
    )
  
  return (
    <div className='thirdHead'>
        <pre> 
            Question 3: What is useEffect Hook ?(Implementation)?
        <br />
        <br />
        <button onClick={() => {setCount(count+1)}}>Like</button>
                               <div>Count : {count}</div> 
        <button onClick={() => {setName(name+1)}}>Unlike</button>
        <div>Name: {name}</div>
<br />
    We have two useEffect hooks, one will log when, count will change <br />
    , and count will change when we click on like.
    and it will log the effect when the value of count is changed. using useEffect
    similarly, when we click on Unlike Button.
      <br />
        
      <br /><br />
      


       
        
        </pre><hr width='200%' />
    </div>
  )
}

export default Question3