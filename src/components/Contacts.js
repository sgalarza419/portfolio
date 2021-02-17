import React from 'react'

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form and describe your project needs and I will contact you as soon as possible</p> 
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xm-12">
                        {/* NAME INPUT */}
                        <input 
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        />
                        {/* PHONE INPUT */}
                        <input 
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        />
                        {/* EMAIL INPUT */}
                        <input 
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        />
                        {/* SUBJECT INPUT */}
                        <input 
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <textarea 
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        ></textarea>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts

