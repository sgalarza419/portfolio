import React from 'react'
import smg from '../SMG.png'

const AboutMe = () => {
    return (
        <div id="aboutme" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="profile-img"src={smg} alt="Steven Galarza"/>
                </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                    Steven Galarza is a web-developer in training who loves connecting with his family
                    and friends; be it playing Dungeons & Dragons or baking bread for them.  He enjoys 
                    learning and sharing new information with the people closest to him.  You can catch
                    him in the mornings preparing for a day of coding by brewing up a cup of coffee.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
