import React from 'react'
import logo from '../worldwideweb.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container">

            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Experience</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;