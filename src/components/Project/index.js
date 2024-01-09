import React from 'react';

function Project() {
    return (
            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    <div className="mb-0 projects">

                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/weather.webp`)} alt='' ></img></div>
                            <h4><a href='https://kwax17.github.io/the-weather/'>Weather App </a><a className="social-icon" href="https://github.com/kwax17/the-weather"><i className="fab fa-github"></i></a></h4>
                        </div>

                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/quizzy.webp`)} alt='' ></img></div>
                            <h4><a href='https://kwax17.github.io/quizzy/'>Quizzy </a><a className="social-icon" href="https://github.com/kwax17/quizzy"><i className="fab fa-github"></i></a></h4>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Project;



