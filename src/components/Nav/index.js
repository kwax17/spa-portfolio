import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Kelly Wacker</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require(`../../assets/img/resumepic.webp`)} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#art">Physical Art</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#design">Digital Art</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#photos">Photos</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience/Resume</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact Me</a></li>
                    <span className="d-none d-lg-block"><img className="img-fluid h-75 p-5" src={require(`../../assets/graph-design/1.png`)} alt="..." /></span>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

