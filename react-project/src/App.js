//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import { FakestoreIndex } from './fakestore/fakestore-index';
import { FakestoreCategories } from './fakestore/fakestore-categories';
import { FakestoreProducts } from './fakestore/fakestore products';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='container-fluid'>
            <nav className="d-flex justify-content-between p-2 bg-dark text-white">
                <div className="h3">Fakestore</div>
            <div>
                <span className="me-3"><Link to="/" className='text-decoration-none'>Home</Link></span>
                <span className="me-3"><Link to="categories" className='text-decoration-none'>Shop</Link></span>
                <span className="me-3"><Link className='text-decoration-none' >Contact</Link></span>
            </div>
            <div>
               <span className="bi bi-search me-3"></span> 
               <span className="bi bi-heart me-3"></span>
               <span className="bi bi-person-fill me-3"></span>
               <span className="bi bi-cart4 me-3"></span>
            </div>
            </nav>
            </div>
      <Routes>
        <Route path='/' element={<FakestoreIndex/>}></Route>
        <Route path='categories' element={<FakestoreCategories/>} ></Route>
        <Route path="products/:category" element={<FakestoreProducts/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
