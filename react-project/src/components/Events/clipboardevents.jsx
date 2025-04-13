
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export function ClipBoardEvents() {

    const[status,setStatus]=useState('');

    function handleCopy(){
        setStatus("Number Copied");
    }
    function handleBlur(){
        setStatus("");
    }
    function handlePaste(){
        document.onpaste =() =>{
            return false
        }
  }
    return(
        <div className="container-fluid">
            <dl>
                <h3>Verify Account</h3>
                <dt>Account Number</dt>
                <dd><input type="text" onCopy={handleCopy} onBlur={handleBlur}></input></dd>
                <dd>{status}</dd>
                <dt>Confirm Number</dt>
                <dd><input type="text" onPaste={handlePaste}></input></dd>

            </dl>
        </div>
    )
}