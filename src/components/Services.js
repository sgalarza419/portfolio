import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                            <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                            </div>
                                <h3>Web Design</h3>
                                <p> Design with accessibility at the forefront of any project.</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                            <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                            </div>
                                <h3>Web Development</h3>
                                <p>Your website wll be built with the latest current technologies.</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                            <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" />
                            </div>
                                <h3>Full Stack Web Development</h3>
                                <p>Potential clients will have a fully versitle developer from backend to front end development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
