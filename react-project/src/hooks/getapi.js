

import { useEffect,useState } from "react";

export function useAPI(url){
    const[data,setData]=useState();
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(content=>setData(content));
    },[url]);
    return data;
}