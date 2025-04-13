import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

export function FormikDemo() {

    function ValidateProducts(FormData){
        var errors={Name:'',Price:'',Stock:'',City:''};
        if(FormData.Name.length===0){
            errors.Name="Name Require";
        }else{
            if(FormData.Name.length<4){
                errors.Name="Name too short min 4 chars required";
            }else{
                errors.Name="";
            }
        }
        if(FormData.Price.length===0){
            errors.Price="Price required";
        }else{
           if(isNaN(FormData.Price)){
            errors.Price="Price must be a number";
           } else{
            errors.Price="";
           }
        }
    
        if(FormData.City==="-1"){
            errors.City="Please select a city";
        }else{
            errors.City="";
        }
        return errors
    }

  const formik = useFormik({
    initialValues: {
      Name: '',
      Price: 0,
      City:'',
      Stock: false,
    },
    validate: ValidateProducts,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  })

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h3>Register Product</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              name="Name"
              value={formik.values.Name}
            />
          </dd>
          <dd className='text-danger'>{formik.errors.Name}</dd>
          <dt>Price</dt>
          <dd>
            <input
              type="number"
              onChange={formik.handleChange}
              name="Price"
              value={formik.values.Price}
            />
          </dd>
          <dd className='text-danger'>{formik.errors.Price}</dd>
          <dt>Stock</dt>
          <dd>
            <input
              type="checkbox"
              onChange={formik.handleChange}
              name="Stock"
              checked={formik.values.Stock}
              In Stock
            />
          </dd>
          <dt>Shipped to</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
                <option value="-1">Select City</option>
                <option value="Hyd">Hyd</option>
                <option value="Delhi">Delhi</option>
                <option value="Bang">Bang</option>
            </select>
          </dd>
          <dd className='text-danger'>{formik.errors.City}</dd>
          <button type="submit">Submit</button>
        </dl>
      </form>
    </div>
  );
}
