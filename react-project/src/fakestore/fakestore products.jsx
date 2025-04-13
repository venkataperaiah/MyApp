/* eslint-disable jsx-a11y/alt-text */
import { useEffect,useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export function FakestoreProducts(){

    const[products,setProducts]=useState([]);
    const params = useParams();

    useEffect(()=>{
        // eslint-disable-next-line no-template-curly-in-string
        axios.get('https://fakestoreapi.com/products/category/${params.category}')
        .then(response=>{
            setProducts(response.data);
        })
    },[]);
    return(
        <div className="container mt-4">
            <h3>You are viewing{params.category}</h3>
            {products.map((product) => (
  <div key={product.id}>
    <h2>{product.title}</h2>
    <p>${product.price}</p>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
  </div>
))}

            <p>
                <Link to="/categories">Back to categories</Link>
            </p>
        </div>
    )
}