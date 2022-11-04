import React, { useState } from 'react'

const Question5 = () => {
  const [message, setMessage] =useState("JavaScript");
  const chooseMessage = (message) => {
    setMessage(message);
  };
  return (
    <div className='fifthHead'>
      <h4>Question 5: How do you pass data from parent to child:</h4>
      <p>we can pass the data from parent to child in the form of props</p>
      <h3>{message}</h3>
      <Child chooseMessage={chooseMessage} />
    </div>
  );
};
const Child = ({ chooseMessage }) => {
  let m = 'ChildMessage';
  return (
    <div>
      <button id="parent" onClick={() => chooseMessage(m)}>Change Message</button>
    </div>
  );
};

export default Question5