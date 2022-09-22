import React from 'react';

function About() {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Kelly
                    <span className="text-primary"> Wacker</span>
                </h1>
                <div className="subheading mb-5">
                    39 Claudia Lane · Manahawkin, NJ 08050 · (201) 937-8956 ·
                    <a href="mailto:kelwacker@gmail.com"> kelwacker@gmail.com</a>
                </div>
                <p className="lead mb-5">A positive and motivated individual with an eye for graphic art and visual identity, along with customer service experience, pursuing a career in the film, design, and media industry. Understands current social and stylistic trends, and offers creative solutions and ideas in the workplace.</p>
                <div className="social-icons">
                <a className="social-icon" href="https://www.linkedin.com/in/kellywacker/"><i className="fab fa-linkedin-in"></i></a>
                <a className="social-icon" href="https://github.com/kwax17"><i className="fab fa-github"></i></a>
                <a className="social-icon" href="https://www.youtube.com/channel/UCIRnT5vRr-GdCd6SKO_GKEA"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </section>
    );
}

export default About;
