import SearchContact from "../contacts/SearchContact";

const Header = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-6">
                        <div className="d-flex">
                             <span className="navbar-brand">
                       <i className="fab fa-pied-piper fa-lg mx-3"></i>
                       Company Navbar
                   </span>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Help Center
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Help 1</a></li>
                                            <li><a className="dropdown-item" href="#">Help 2</a></li>
                                            <li><a className="dropdown-item" href="#">Help 3</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        {/*<SearchContact/>*/}
                    </div>
                    <div className="col-1 d-flex align-items-center">
                        <i className="fab fa-twitter mx-3"
                           style={{color: "white"}}
                           title="twitter">
                        </i>
                        <i className="fab fa-instagram mx-3"
                           style={{color: "white"}}
                           title="instagram">
                        </i>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <div className="rounded-circle d-flex justify-content-center align-items-center mx-3"
                             style={{
                                 backgroundColor: "red", color: "white", width: "30px", height: "30px",
                             }}>
                            <span className="fw-bold">s</span>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Samira Ahmadi
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                                <li><a className="dropdown-item" href="#">Account Setting</a></li>
                                <li><a className="dropdown-item" href="#">Payment</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}
export default Header;