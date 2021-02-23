import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
        </div>
        <div className="container experience-wrapper">
            <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2012-2015</h3>
                    <p>Accompanied science and mathematic professors in guiding students to understand their course material.  Headed study groups for students at Bergen Community College which kept in line with material being taught in classes.</p>
                </div>
            </div>
            {/*  */}
            <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2017-2018</h3>
                    <p>Collaborated with coworkers as a Engineering Inspector to communicate the needs of the Township Engineer to contractors.  Ensures projects are up to safety regulations and completed according to the Township Engineers' needs.</p>
                </div>
            </div>
                        {/*  */}
                        <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2019-2020</h3>
                    <p>Working as a Staff Engineer for R3M Engineering as a team to complete projects and meet deadlines.  Tracked daily activities and expenses on multiple job sites while assessing optimal equipment for the project development.</p>
                </div>
            </div>
                        {/*  */}
                        <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2020-2021</h3>
                    <p>Attended and completed an online coding bootcamp with a focus on developing skills in HTML, CSS, and JavaScript.  Learned MERN full-stack web development and colaborative efforts using Github.  Developed and organized projects with peers to showcase skills obtained from the bootcamp.</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Experience
