import { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
export function ApiDataBindingAjax(){

    const[products,setProducts]=useState([]);

    function LoadData(){
        $.ajax({
            method:"get",
            url:'products.json',
            success:(data)=>{
                setProducts(data);
            }
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