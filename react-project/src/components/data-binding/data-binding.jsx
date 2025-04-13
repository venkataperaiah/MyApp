import React from "react";
export function DataBinding(){
    var Name ="Samsung Tv";
    var Price=23456.90;

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <dl>
                    <dt>Name</dt>
                    <dd>{Name}</dd>
                    {
                     (Price)?<div><dt>Price</dt><dd>{Price}</dd></div>:""
                    }
                </dl>
            </div>
        </div>
    )
}
export default DataBinding;