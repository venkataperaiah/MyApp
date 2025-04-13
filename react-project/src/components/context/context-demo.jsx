
import { createContext,useContext,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
let UserContext=createContext(null);

export function LevelTwoComponent(){
    let user=useContext(UserContext);
    return(
        <div className="bg-warning p-3 text-white">
            <h3>Level-2 Component-{user}</h3>
        </div>
    )
}

export function LevelOneComponent(){
    let user=useContext(UserContext);
    return(
        <div className="bg-primary p-3 text-white">
            <h3>Level-1 Component-{user}</h3>
            <LevelTwoComponent/>
        </div>
    )
}

export function ContextDemo(){
    const[user,setUser]=useState('');
    function handleNameChange(e){
        setUser(e.target.value)

    }
    return(
        <div className="container-fluid bg-dark p-3 text-white">
            <UserContext.Provider value={user}>
                <input type="text" onChange={handleNameChange} placeholder="User Name">

                </input>
                <h1>Parent Component-{user}</h1>
            <LevelOneComponent/>
            </UserContext.Provider>
        </div>
    )
}