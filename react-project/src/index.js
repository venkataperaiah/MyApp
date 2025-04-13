/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as bootstrap from "bootstrap";
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//import { EmiCalculator } from './components/form react/EmiCalculator';
//import { ApiDataBindingAjax } from './components/data-binding/api-data-binding-ajax';
//import { ApiDataBindingAxios } from './components/data-binding/api-data-binding-axios';
//import { ApiDataBinding } from './components/data-binding/api-data-binding';
// import { ApiDataBindingFetch } from './components/data-binding/api-data-binding-fetch';
// import DataBinding from './components/data-binding/data-binding';
// import Sevenjan from './components/data-binding/sevenjan';
// import { Tenjan } from './components/data-binding/tenjan';
//import {OnMouseEvent} from './components/Events/mouse';
// import { TouchStart } from './components/Events/touch';
//import { KeyEvents } from './components/Events/keyevents';
// import {ClipBoardEvents} from './components/Events/clipboardevents';
//import { ButtonEvents } from './components/Events/button events';
//import { FormikDemo } from './formik/formik';
//import {HookFormDemo} from './formik/hook form'
//import { Debounce } from './components/reacthook/debounce';
//import { Login } from './formik/login';
//import {ContextDemo} from './components/context/context-demo';
//import { ReducerDemo } from './usereducer/reducer-demo';
//import { FakestoreIndex } from './fakestore/fakestore-index';
//import { FakestoreCategories } from './fakestore/fakestore-categories';
//import { BrowserRouter } from 'react-router-dom';
//import { FakestoreProducts } from './fakestore/fakestore products';
//import { useState } from './statemanagement/usestate/useState';
//import { Counter2 } from './statemanagement/usestate/useReducer';
//import { Counter3 } from './statemanagement/usestate/useEffect';
//import { Counter4 } from './statemanagement/usestate/useRef';
import { EmiCalculator } from './components/form react/EmiCalculator';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <EmiCalculator/>
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
