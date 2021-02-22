import React from 'react'
import logo from '../worldwideweb.png'
import {Link} from 'react-scroll';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">

            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color:"whitesmoke"}}>SMGalarza</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{ color: "#fff"}}/>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="aboutme" offset={-55} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="services" offset={-55} className="nav-link" href="#">Services</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#">Experience</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-45} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contacts" offset={0} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;