import React, {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export  function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
   function decrement(){
    setCount (count - 1)
   }
    function reset(){
        setCount(0);
    }
  return (
    <center>
      <div className='container-fluid text-center align-middle' style={{
        boxShadow: "1px 10px 20px 2px rgba(0,0,0,0.1)",
        width: "20%",
        border: "2px solid rgb(94, 88, 88)",
        padding: "10px",
        margin: "10px auto"
      }}>
    
        <div className='align-center'>
            <h4>Counter:{count}</h4>
            <button className='btn btn-primary mt-3' onClick={increment}>Increment</button><br></br>
            <button className='btn btn-success mt-3' onClick={decrement}>Decrement</button><br></br>
            <button className='btn btn-danger mt-3'onClick={reset}>Reset</button><br></br>
        </div>
    </div>
    </center>
  );
}
