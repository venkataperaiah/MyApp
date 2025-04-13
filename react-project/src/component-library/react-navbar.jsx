export function ReactNavbar(props) {
    return (
        <nav className="p-3 m-2 border border-1 d-flex justify-content-between">
            <div>
               <span className="h3">{props.BrandName}</span> 
            </div>
            <div>
                {
                    props.MenuItems.map((item, index) => 
                        <span key={index} className="me-3">
                            <a href="#">{item}</a>
                        </span>
                    )
                }
            </div>
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <button className="btn btn-warning">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}
