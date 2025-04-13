import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { useCaptcha } from "../hooks/captcha";
import { useAPI } from "../hooks/getapi";

export function Login(){
    const code =useCaptcha();
    const categories=useAPI("https://fakestoreapi.com/products/categories");
    return(
        <React.Fragment>
            <main>
                <form className="container-fluid justify-content-center">
                    <dl>
                        <dt>User NAme</dt>
                        <dd><input type="text" className="form-control"></input></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"></input></dd>
                        <dt>Verify code</dt>
                        <dd>{code}</dd>
                        <dt>Select Category</dt>
                        <dd>
                            <select>
                                {categories.map(category=>
                                    <option key={category}>{category}</option>
                                )
                                }
                            </select>
                        </dd>
                    </dl>
                    <button className="btn btn-primary w-100">Login</button>

                </form>
            </main>
        </React.Fragment>
    )
}