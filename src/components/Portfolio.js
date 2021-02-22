import React from 'react'
// import javaquiz from '../img/Java Quiz.PNG';
import workday from '../img/Work Day Planner.PNG';
import randompassword from '../img/Random Password.PNG';
import spiceitup from '../img/SpiceItUp.PNG';
import weather from '../img/Weather Dashboard.PNG'
// FONTAWESOME IMPORTS //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

function Portfolio() {

    //Weather Dashboard
    const openPopupboxWeather = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox"src={weather} alt="Weather Dashboard"/>
        <p>Need to find today or the five day forecast? Use this website to get the
            weather of cities from around the world. The use of multiple APIs and local storage the website
            comes alive! Try it out and check the weather in your area today.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={()=>window.open("https://sgalarza419.github.io/weatherPanel/", "_blank")}>https://sgalarza419.github.io/weatherPanel/</a>
        <br/>
        <b>GitHub:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/sgalarza419/weatherPanel", "_blank")}>https://github.com/sgalarza419/weatherPanel</a>
        </>   
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigWeather = {
        titleBar: {
            enable: true,
            text: "Weather Dashboard"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

        //Random Password
        const openPopupboxRandomPassword = () => {
            const content = (
            <>
            <img className="portfolio-image-popupbox"src={randompassword} alt="Random Password Generator"/>
            <p>A user is given a randomly generated password based on selected criteria. This
            project taught me the importance
            of else if statements when selecting between multiple user input. I also learned how to change
            and impliment arrays using multiple methods.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={()=>window.open("https://sgalarza419.github.io/randomPassword/", "_blank")}>https://sgalarza419.github.io/randomPassword/</a>
            <br/>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/sgalarza419/randomPassword", "_blank")}>https://github.com/sgalarza419/randomPassword</a>
            </>   
            )
            PopupboxManager.open({ content })
        }
        const popupboxConfigRandomPassword = {
            titleBar: {
                enable: true,
                text: "Random Password Generator"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

        //Work Day Planner
        const openPopupboxWorkCalendar = () => {
            const content = (
            <>
            <img className="portfolio-image-popupbox"src={workday} alt="Work Day Planner"/>
            <p>Need to organize your work day? In this website you can input work activities
            based on the hour of work. I learned how to use moment to keep track of the current time. I used
            moment to change the color of a note background based on the time and local storage to keep
            daily inputs when the page is refreshed.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={()=>window.open("https://sgalarza419.github.io/workCalendar/", "_blank")}>https://sgalarza419.github.io/workCalendar/</a>
            <br/>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/sgalarza419/workCalendar", "_blank")}>https://github.com/sgalarza419/workCalendar</a>
            </>   
            )
            PopupboxManager.open({ content })
        }
        const popupboxConfigWorkCalendar = {
            titleBar: {
                enable: true,
                text: "Work Day Scheduler"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

        //Spice It Up!
        const openPopupboxSpiceItUp = () => {
            const content = (
            <>
            <img className="portfolio-image-popupbox"src={spiceitup} alt="Spice It Up!"/>
            <p>In this app you will combat boredom by selecting an activity to randomly be
            generated. You can save your newly inspired venture for another day if the weather doesn't
            permit.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={()=>window.open("https://dspark8916.github.io/Project1Group2/", "_blank")}>https://dspark8916.github.io/Project1Group2/</a>
            <br/>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/dspark8916/Project1Group2", "_blank")}>https://github.com/dspark8916/Project1Group2</a>
            </>   
            )
            PopupboxManager.open({ content })
        }
        const popupboxConfigSpiceItUp = {
            titleBar: {
                enable: true,
                text: "Spice It Up!"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

    return (
    <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box" onClick={openPopupboxWeather}>
                    <img className= "portfolio-image" src={weather} alt="Weather Dashboard"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="porfolio-icon" icon={faSearchPlus}/>
                </div>
                {/*  */}
                <div className="portfolio-image-box" onClick={openPopupboxRandomPassword}>
                    <img className= "portfolio-image" src={randompassword} alt="Random Password"/>
                <div className="overflow"></div>
                    <FontAwesomeIcon className="porfolio-icon" icon={faSearchPlus}/>
                </div>
                {/*  */}
                <div className="portfolio-image-box" onClick={openPopupboxWorkCalendar}>
                    <img className= "portfolio-image" src={workday} alt="Work Day Planner"/>
                <div className="overflow"></div>
                    <FontAwesomeIcon className="porfolio-icon" icon={faSearchPlus}/>
                </div>
                {/*  */}
                <div className="portfolio-image-box" onClick={openPopupboxSpiceItUp}>
                    <img className= "portfolio-image" src={spiceitup} alt="Spice It Up!"/>
                <div className="overflow"></div>
                    <FontAwesomeIcon className="porfolio-icon" icon={faSearchPlus}/>
                </div>
            </div>
        </div>
        <PopupboxContainer {...popupboxConfigWeather}/>
        <PopupboxContainer {...popupboxConfigRandomPassword}/>
        <PopupboxContainer {...popupboxConfigWorkCalendar}/>
        <PopupboxContainer {...popupboxConfigSpiceItUp}/>
    </div>
    )
}

export default Portfolio
