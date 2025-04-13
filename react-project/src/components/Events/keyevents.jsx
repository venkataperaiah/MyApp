import axios from "axios";
import { useState } from "react"

export function KeyEvents(){
    const[username,setUserName]=useState([]);

    function handleUserName(e){
        axios.get("users.json")
        .then(response=>{
            for(var user of response.data)
            {
                if(user.UserName===e.target.value){
                    setUserName("User Name taken-Try Another");
                    break;
                }
                else{
                    setUserName("User Name Available")
                }
            }
        })
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={handleUserName}></input></dd>
                <dd>{username}</dd>
            </dl>
        </div>
    )
}