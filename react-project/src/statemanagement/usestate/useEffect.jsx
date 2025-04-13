import React,{useEffect, useState} from 'react';

export function Counter3(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=> count+1);
        },1500)
    })
    return(
        <>
        <h2>I have rendered {count} times</h2>
        </>
    )
}