/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useEffect ,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function OnMouseEvent(){
    const[pics,setPics] = useState([{image_url:''}]);
    const[activeImage,setActiveImage]=useState('');

    useEffect(()=>{
        axios.get("pics.json")
        .then(response=>{
            setPics(response.data);
        })
    },[]);

    function handleMouseOver(e){
        setActiveImage(e.target.src)
    }
    return(
        <div className="container-fluid ">
            <div className="row">
                <nav className="col-2">
                    {
                        pics.map(pic=>
                            <div className="mt-3 mb-3" key={pic.image_url} style={{width:'200px' ,height:'100px'}}>
                                <img border="2px solid" onMouseOver={handleMouseOver} src={pic.image_url} width="100%" height="50"></img>
                            </div>
                        )
                    }
                </nav>
                <div className="col-10 mt-4">
                    <img width="300" height="400" src={activeImage} ></img>
                </div>
            </div>
        </div>
    )
}