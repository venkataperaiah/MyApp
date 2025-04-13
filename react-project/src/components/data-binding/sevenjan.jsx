
import { useState } from "react";
export function Sevenjan(){
    const [userName,setUserName]=useState('john');
    function handleUserName(e){
        setUserName(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>Two Way Binding</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleUserName} value={userName}></input></dd>
            </dl>
            <p>Hello ! {userName}</p>
        </div>
    )
}
export default Sevenjan;