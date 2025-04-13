import { useEffect } from "react";
import { useState } from "react";
import axious from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export function ApiDataBindingAxios(){

    const[products,setProducts]=useState([]);

    function LoadData(){
        axious.get("products.json")
        .then(response=>{
            setProducts(response.data)
        })
    }
    useEffect(()=>{
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