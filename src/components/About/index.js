import React from 'react';
import profilePic from './shawn.jpeg';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Shawn Smith</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={profilePic} alt="Shawn Smith" />

                <p>
                My first major career path lead me through the Real Estate world - everything from sales to operations management. I have a background in office and business management with an emphasis on systems creation and database management.
                </p>
                <p>
                After 11 years in the the business, I found it was time to look for a new challenge. This lead me to partake in the Full Stack Web Development certification program from the University of Texas. I wanted to take my love of database management and data analysis to new levels by learning how to create structured and adaptable databases. I enjoy working in the minutiae!
                </p>
                <p>
                I pride myself on building inclusive workplaces, and being a solutions-first manager. I have the ability to thrive in settings that aren't clearly defined, and choose those opportunities to use my skill set to create efficient and sustainable processes.
                </p>
            </div>
        </section>
    )
}

export default About;