import {NavLink} from "react-router-dom";
import {useUser} from "../context/UserProvider.tsx";


function Navbar() {

    const { currentUser,logoutClick } = useUser();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {
                            (currentUser?.username) ?
                                (
                        <div className="navbar-nav">
                           <NavLink to='/databinding' className='nav-link'>Data Binding</NavLink>
                            <NavLink to='/offer' className='nav-link'>Offer</NavLink>
                            <NavLink to='/products' className='nav-link'>Products</NavLink>
                            <NavLink to='/uncontrolled' className='nav-link'>Uncontrolled Form</NavLink>
                            <NavLink to='/controlled' className='nav-link'>Controlled Form</NavLink>
                            <NavLink to='/formik' className='nav-link'>Formik Form</NavLink>
                            <NavLink to='/productsApi' className='nav-link'>Product List from Web API</NavLink>
                            <NavLink to='/login' className='nav-link'>Login Form</NavLink>
                            <a onClick={logoutClick}>Welcome {currentUser.username}</a>
                        </div>
                                )
                                : <NavLink to='/login' className='nav-link'>Login</NavLink>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
