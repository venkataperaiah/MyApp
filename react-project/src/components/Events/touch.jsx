/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react"


export function TouchStart(){
    const[msg ,setMsg]=useState('');

    function handleTouch(){
        setMsg("Full Name:Kajal Agarwal")
    }
    return(
        <div className="container-fluid">
            <img src="m1.jpg" onTouchStart={handleTouch} width="300" height="400"></img>
            <h1>{msg}</h1>
        </div>
    )
}