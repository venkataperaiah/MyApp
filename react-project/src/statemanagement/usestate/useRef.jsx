
import React,{useState,useEffect,useRef} from 'react';

export function Counter4(){
    const[value,setValue]=useState(0);
    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    });
    return(
        <center>
        <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button><br></br>
        <h6>{value}</h6><br></br>
        <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button><br></br>
        <p>Render Count:{count.current}</p>
        </center>
    )
}