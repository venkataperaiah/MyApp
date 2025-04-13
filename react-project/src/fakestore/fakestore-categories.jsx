import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export function FakestoreCategories(){
    const[categories,setCategories]=useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setCategories(response.data);
        })
    },[]);
    return(
        <div>
            <ol>
                {
                    categories.map(category=> <li key={category}> <Link to={'/products/$category'}> {category} </Link></li>)
                }
            </ol>
        </div>
    )
}