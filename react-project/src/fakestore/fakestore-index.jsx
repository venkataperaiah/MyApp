
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export function FakestoreIndex(){
    return(
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
            <section>
                <main className="text-center">
                    <h1>Fakestore-Online Shopping</h1>
                </main>
            </section>
        </div>
    )
}