import React from 'react';

function Project() {
    return (
            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    <div className="mb-0 projects">
                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/dnd.png`)} alt='' ></img></div>
                            <h4><a href='https://dry-sands-22029.herokuapp.com/'>DnD Character Creator</a> <a className="social-icon" href="https://github.com/tristristy/dnd-character-creator"><i className="fab fa-github"></i></a></h4>
                        </div>
                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/note-taker.png`)} alt='' ></img></div>
                            <h4><a href='https://nameless-wave-39366.herokuapp.com/'>Note Tracker</a> <a className="social-icon" href="https://github.com/kwax17/note-tracker"><i className="fab fa-github"></i></a></h4>
                        </div>
                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/weather.png`)} alt='' ></img></div>
                            <h4><a href='https://kwax17.github.io/the-weather/'>Weather App </a><a className="social-icon" href="https://github.com/kwax17/the-weather"><i className="fab fa-github"></i></a></h4>
                        </div>
                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/tech-blog.png`)} alt='' ></img></div>
                            <h4><a href='https://fast-savannah-20928.herokuapp.com/'>Tech Blog </a><a className="social-icon" href="https://github.com/kwax17/the-social-network"><i className="fab fa-github"></i></a></h4>
                        </div>
                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/quizzy.png`)} alt='' ></img></div>
                            <h4><a href='https://kwax17.github.io/quizzy/'>Quizzy </a><a className="social-icon" href="https://github.com/kwax17/quizzy"><i className="fab fa-github"></i></a></h4>
                        </div>
                        <div className='project-card col-5'>
                            <div className='project-img'><img src={require(`../../assets/img/contact-card.png`)} alt='' ></img></div>
                            <h4><a href='whttps://guarded-oasis-43574.herokuapp.com/'> Contact Card</a><a className="social-icon" href="https://github.com/kwax17/team-generator"><i className="fab fa-github"></i></a></h4>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Project;



