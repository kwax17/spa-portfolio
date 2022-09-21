import React from 'react';

function Footer() {
    return (
        <footer className="flex-row px-1">
            <div className="social-icons footer">
                <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
            </div>
        </footer>
    );
}

export default Footer;