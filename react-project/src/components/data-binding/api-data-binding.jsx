
import { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export function ApiDataBinding(){

    const[products,setProducts]=useState([]);

    function LoadData(){
        var http= new XMLHttpRequest();
        http.open("get","products.json",true);
        http.send();
        http.onreadystatechange=function(){
            if(http.readyState===4){
                setProducts(JSON.parse(http.responseText));
                console.log(http.responseText);
            }
        }
    }
    useEffect(()=>{
        console.log()
        LoadData();
    },[]);

    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     products.map(product => 
                        <tr key={product.Name}>
                            <td>{product.Name}</td>
                            <td>{product.Age}</td>
                        </tr>
                        )
                   }
                </tbody>
            </table>
        </div>
    )
}