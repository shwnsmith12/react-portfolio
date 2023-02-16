import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Shawn Smith</h2>
          <ul>
            <li>
              Interests include Data Analysis and Database Management, Full-Stack Web
              Development, Learning and Growing Daily!
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/shwnsmith12/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/shwnsmith12/first-day-demo/raw/main/SSRes.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            Excel, Word, Outlook, Office Suite<br />
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;