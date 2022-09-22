import React from 'react';

function Experience() {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Graphic Designer</h3>
                        <div className="subheading mb-3">The Sandpaper</div>
                        <p>Employ creative methods to create, edit, and rearrange advertisements for a weekly paper, ensuring both a happy customer and engaging layout.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">June 2022 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Graphic Designer</h3>
                        <div className="subheading mb-3">Senior Publishing Company</div>
                        <p>Consult and collaborate with independent communities and their editorial staffs to create monthly newsletters, flyers, and advertisements.</p>
                        <p>Correctly format and design easy-to-follow layouts, as well as use artistic and creative abilities to make it an enjoyable experience.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">October 2021 - May 2022</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Photographer/Videographer</h3>
                        <div className="subheading mb-3">Freelance</div>
                        <p>Work alongisde local businesses to create alluring, true-to-life social media imagery to attract customers.</p>
                        <p>Capture scenic views and transform everyday life into beautiful moments and memories.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">May 2020 - Present</span></div>
                </div>
            </div>
        </section>
    );
}

export default Experience;



