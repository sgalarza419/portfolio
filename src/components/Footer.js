import React from 'react'
import { 
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
     } from 'react-share';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city South Amboy Prospect st 2020</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:201-270-7479">201-270-7479</a>
                        </div>
                        <div className="d-flex">
                            <p>sgalarza4190@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <TwitterShareButton
                            url={"https://twitter.com/SMGalarza419"}
                            title={"FullStack Developer"}
                            hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}></TwitterIcon>
                            </TwitterShareButton>
                            {/*  */}
                            <LinkedinShareButton
                            url={"https://www.linkedin.com/in/steven-galarza-1524b0122/"}
                            summary="FullStack Developer"
                            source="#"
                            >
                                <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;SMGalarza | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
