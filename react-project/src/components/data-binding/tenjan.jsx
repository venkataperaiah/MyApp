/* eslint-disable eqeqeq */
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Tenjan(){
    const[product,setProduct]=useState({Name:'',Price:0,City:'',Stock:''});
    // const[formData,setFormData]=useState({Name:'',Price:0,City:'',Stock:''});

    function handleNameChange(e){
        setProduct({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
            Stock:product.Stock
        })
    }

        function handlePriceChange(e){
            setProduct({
                Name:product.Name,
                Price:e.target.value,
                City:product.City,
                Stock:product.Stock
            })
        }

            function handleCityChange(e){
                setProduct({
                    Name:product.Name,
                    Price:product.Price,
                    City:e.target.value,
                    Stock:product.Stock
                })
            }

                function handleStockChange(e){
                    setProduct({
                        Name:product.Name,
                        Price:product.Price,
                        City:product.City,
                        Stock:e.target.value
                    })
    }

   // function handleSubmitClick(){
   //     setFormData(product);
   // }
    return(
        <div className='container-fluid'>
            <div className='row mt-4'>
                <div className='col-3'>
                    <dl>
                        <h2>Register Product</h2>
                        <dt>Name</dt>
                        <dd><input type='text' onChange={handleNameChange} className='form-control'></input></dd>
                        <dt>Price</dt>
                        <dd><input type='text' onChange={handlePriceChange} className='form-control'></input></dd>
                        <dt>Shipped To:</dt>
                        <dd>
                            <select onChange={handleCityChange} className='form-select'>
                                <option>SelectCity</option>
                                <option>Hyderabad</option>
                                <option>Bangolore</option>
                                <option>Chennai</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className='form-switch'><input type='checkbox'className='form-check-input' onChange={handleStockChange}></input>Available</dd>
                    </dl>
                  <button className='btn btn-primary w-100'>Submit Click</button>
                </div>
                <div className='col-9 ps-4'>
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>Shipped To:</dt>
                        <dd>{product.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}