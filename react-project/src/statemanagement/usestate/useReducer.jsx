import React from 'react'
import { useReducer } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


function counterReducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return{count: state.count + 1};
        case 'DECREMENT':
            return{count: state.count-1 };
        default:
            return state;
    }
}
export function Counter2(){
    const[state,dispatch]=useReducer(counterReducer,{count:0});
    return(
        <div>
            <p>Counter:{state.count}</p>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        </div>
    );
}