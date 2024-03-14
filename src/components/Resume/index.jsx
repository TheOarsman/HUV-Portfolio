import React from "react";
import myResume from "../../assets/files/Heinz Ulrich V - Resume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              /* upload PDF resume to google drive get share-link from google
              apply share-link to 'href' add target "blank" attribute to a tag
              <a
                href={myResume}
                className="download-logo"
                target="_blank"
                rel="noreferrer"
              >
                <BsCloudDownload />
              </a>
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // This is the resume language */}
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End Development</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <MdFoundation />
              </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Font Awesome</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>JSX</li>
              <li>React</li>
              <li>React Hooks</li>
              <li>SCG</li>
              <li>Day.js</li>
              <li>Workbox</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48x48.PNG"></p> */}

          <p className="column-title">Back-End Development</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>Node.Js</li>
              <li>Express</li>
              <li>MVC</li>
              <li>Controllers</li>
              <li>Models</li>
              <li>Routes</li>
              <li>Sequelize</li>
              <li>dotenv</li>
              <li>mysql2</li>
              <li>MongoDB</li>
              <li>Shell Script</li>
              <li>Connection.js</li>
              <li>Object-Relational Mapping</li>
              <li>JSON</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
          <p className="column-title">Development Tools & Utilities</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrDocumentPerformance />
              </li>
              <li>Babel Configuration</li>
              <li>Jest</li>
              <li>Nodemon</li>
              <li>Git</li>
              <li>Package.json</li>
              <li>webpack Configuration</li>
              <li>Vite Configuration</li>
              <li>dotenv</li>
              <li>Index.js</li>
            </ul>
          </p>
        </div>
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Data Storage & Management</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <MdFoundation />
              </li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Sequelize</li>
              <li>Local Storage</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48x48.PNG"></p> */}

          <p className="column-title">APIs & Integration</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>API Integration</li>
              <li>JSON</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
          <p className="column-title">Miscellaneous</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrDocumentPerformance />
              </li>
              <li>ASCII art</li>
              <li>Fs</li>
              <li>Inquirer</li>
              <li>Markdown</li>
              <li>Environmental Variables</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
