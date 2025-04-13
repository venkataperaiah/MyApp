import {useReducer} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

let initialState = {usersCount:0};
 function reducer(state,action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case "join":
            return {usersCount: state.usersCount+1};
            case "exit":
                return {usersCount:state.usersCount-1};
    }
 }

 export function ReducerDemo(){
    const[state,dispatch]=useReducer(reducer,initialState);

    function handleJoinClick(){
        dispatch({type:"join"});
    }

    function handleExitClick(){
        dispatch({type:"exit"});
    }

    return(
        <div className="container-fluid  d-flex justify-content-center">
            <div className="card p-2 m-4 w-40">
            <div className="card-header text-center">
                <h3>server count</h3>
                <p>count live:{state.usersCount}</p>
            </div>
            <div className="card-body">
                <h3>mvp</h3>
            </div>
            <div className="card-footer text-center">
                <button onClick={handleJoinClick} className="btn btn-primary me-2">Join</button>
                <button onClick={handleExitClick} className="btn btn-danger">Exit</button>
            </div>
            </div>
        </div>
    )
 }