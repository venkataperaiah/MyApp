import { useRef,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export function Debounce(){
    const[msg,setMsg]=useState('');
    let flag=useRef(null)

    function msg1(){
        setMsg('Hello');
    }

    function msg2(){
        setMsg('how are you?');
    }

    function msg3(){
        setMsg('welcome to the react js')
    }

    function PlayClick(){
        setTimeout(msg1 ,3000);
       flag.current= setTimeout(msg2 ,6000);
        setTimeout(msg3 ,9000);
    }

    function PauseClick(){
        clearTimeout(flag.current);
    }
    return(
        <div className="container-fluid">
            <div className="mt-4">
                <button onClick={PlayClick} className="bi me-3 bi-play btn btn-dark"></button>
                <button onClick={PauseClick} className="bi  bi-pause btn btn-dark"></button>
            </div>
            <div className="mt-4">
                <span className="h2">{msg}</span>
            </div>
        </div>
    )
}