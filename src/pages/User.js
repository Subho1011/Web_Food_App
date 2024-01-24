import './User.css';
import { useState } from 'react';

const User = (props) => {
  const [counter, setCounter] = useState(0);

  const updateCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="user-card">
      <h1>Functional Components</h1>
      <h1>Name: {props.name}</h1>
      <p>Location: {props.location}</p>
      <p>Contact: subhabrata10111996@mail.com</p>
      <p>Counter Value: {counter}</p>
      <button onClick={updateCounterHandler}>+</button>
    </div>
  );
};

export default User;