import React, { useState } from "react";
import Project from "../Project";
import employeeTracker from "../../assets/images/projectIMGs/employee_tracker.jpg";
import eCommerce from "../../assets/images/projectIMGs/orm_e_commerce.png";
import passWordGen from "../../assets/images/projectIMGs/PsswrdGnrtr.png";
import readMeGen from "../../assets/images/projectIMGs/readme_generator.jpg";
import sillyAPI from "../../assets/images/projectIMGs/SillyAPI.jpg";
import socialNetwork from "../../assets/images/projectIMGs/social_network_api.png";
import weatherDash1 from "../../assets/images/projectIMGs/weather_dashboard1.png";
import workDayScheduler from "../../assets/images/projectIMGs/work_day_scheduler.jpg";
import heinzBarronPortfolio from "../../assets/images/projectIMGs/HeinzBarronPortTop.png";
import svgLogoMaker from "../../assets/images/projectIMGs/logoMaker.png";
import noteTaker from "../../assets/images/projectIMGs/noteTakerHome.png";
import textEditor from "../../assets/images/projectIMGs/JATE_snip.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="work-heading">
          <h2 className="section-title secondary-border">Work</h2>
        </div>
        <Project
          deployedLink="https://youtu.be/aUWs9hD5Fr8"
          thumbnail={employeeTracker}
          demoType="video"
          name="Employee Tracker"
          description="This command-line application serves as a Content Management
                System (CMS) designed for managing a company's employee database
                efficiently. With the integration of the Inquirer and MySQL2
                packages, users, particularly business owners, can seamlessly
                view and interact with information stored in the database. Its
                primary features include the ability to manage departments,
                roles, and employees, empowering business owners to organize and
                plan their business effectively."
          repoURL="https://github.com/TheOarsman/SQL_Employee_Tracker"
        ></Project>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/XMI2PqBvzY8" target="_blank">
                {" "}
                <img
                  src={eCommerce}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="E-Commerce"
                />
              </a>
              <div>
                <h6 className="img-description">Video Demonstration</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>E-Commerce: Back-End ORM</h4>
              <p>
                This demonstration illustrates the fundamental architecture of
                an e-commerce site. The backend was configured with a functional
                Express.js API, seamlessly integrated with Sequelize to interact
                with a MySQL database. This setup forms the backbone of the
                e-commerce platform, enabling smooth data handling and efficient
                communication between the frontend and backend components.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/ORM-E-Commerce-Back-End"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/Oqe-QMF2NqM" target="_blank">
                {" "}
                <img
                  src={readMeGen}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Readme Generator"
                />
              </a>
              <div>
                <h6 class="img-description">Video Demonstration</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>README Generator</h4>
              <p>
                This command-line app swiftly creates professional README.md
                files using the Inquirer Package. It's designed for developers
                who need to generate READMEs quickly and efficiently, enabling
                them to create professional documentation for their projects
                with ease.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/README-Generator"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/7Mlw5yssC3w" target="_blank">
                {" "}
                <img
                  src={socialNetwork}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Social Network"
                />
              </a>
              <div>
                <h6 class="img-description">Video Demonstration</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>Social Network</h4>
              <p>
                This NoSQL Social Network API application provides
                functionalities for users to interact within a social network.
                It enables users to share thoughts, react to friends' thoughts,
                and manage friend lists. Developed with Express.js for routing
                and MongoDB for the database, it utilizes Mongoose ODM for
                seamless interaction and schema-based modeling in Node.js.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/Social-Network-API"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/evxzpTv3JEE" target="_blank">
                {" "}
                <img
                  src={svgLogoMaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SVG Logo Maker"
                />
              </a>
              <div>
                <h6 class="img-description">Video Demonstration</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>SVG Logo Maker</h4>
              <p>
                The SVG Logo Maker is a Node.js command-line tool for freelance
                web developers, enabling quick generation of simple logos
                without graphic design expertise. Built with Object-oriented
                Programming, it offers customization options for text, color,
                and shape selection. With Jest for testing and Inquirer for user
                interaction, it ensures accuracy and a smooth experience,
                producing an SVG file named logo.svg upon completion.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/SVG-Logo-Maker"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Website Portion of Porfolio */}

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a
                href="https://theoarsman.github.io/Who-Is-The-Heinz-Barron-/"
                target="_blank"
              >
                {" "}
                <img
                  src={heinzBarronPortfolio}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TheHeinzBarron Portfolio"
                />
              </a>
              <div>
                <h6 className="img-description">Interactive Demo</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>The Heinz Barron's 1st Portfolio</h4>
              <p>
                Five months ago, I took my first steps into web development with
                this initial portfolio. It was a journey of discovery, filled
                with challenges and learning. Today, I stand before you with a
                new and updated portfolio, showcasing the remarkable progress
                I've made, thanks to dedication and continuous learning. Dive in
                and witness the evolution firsthand!"{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/Who-Is-The-Heinz-Barron-"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a
                href="https://desolate-sierra-47851-d89056b73f92.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <img
                  src={sillyAPI}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Silly API"
                />
              </a>
              <div>
                <h6 class="img-description">Interactive Demo</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>Slappi API</h4>
              <p>
                A website for all things wonky and silly, that coders and
                programmers can have fun!{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/ORM-E-Commerce-Back-End"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a
                href="https://theoarsman.github.io/Weather_Dashboard_SS_API/"
                target="_blank"
              >
                {" "}
                <img
                  src={weatherDash1}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather Dashboard"
                />
              </a>
              <div>
                <h6 class="img-description">Interactive Demo</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                This browser-based weather dashboard offers developers seamless
                access to weather data for cities through third-party APIs. By
                harnessing the 5 Day Weather Forecast, it dynamically updates
                HTML and CSS to deliver precise and current weather information
                to users. Moreover, it employs localStorage for persistent data
                storage, ensuring that user preferences and settings remain
                intact across sessions.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/Weather_Dashboard_SS_API"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a
                href="https://jate-just-another-text-editor-ql4f.onrender.com/"
                target="_blank"
              >
                {" "}
                <img
                  src={textEditor}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Test Editor"
                />
              </a>
              <div>
                <h6 class="img-description">Interactive Demo</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>J.A.T.E. - Just Another Text Editor</h4>
              <p>
                J.A.T.E is a dynamic text editor designed for developers and
                users seeking versatile editing capabilities. With offline
                functionality as a Progressive Web App, robust data persistence,
                and an intuitive interface, it offers a seamless editing
                experience. Deployed on Render for reliability and scalability,
                J.A.T.E ensures uninterrupted access to your content, anytime,
                anywhere.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/PWA-Text-Editor"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a
                href="https://theoarsman.github.io/Rodnam-Proswasd-Gnereotar/"
                target="_blank"
              >
                {" "}
                <img
                  src={passWordGen}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password Generator"
                />
              </a>
              <div>
                <h6 class="img-description">Interactive Demo</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
                This page showcases a Random Password Generator. The generator
                prompts users to specify their preferences for password
                criteria, including length, special characters, upper/lower case
                letters, and numerics. Based on these selections, the tool
                generates a random password tailored to the user's
                specifications.
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/Rodnam-Proswasd-Gnereotar"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a
                href="https://theoarsman.github.io/Work-Day-Scheduler/"
                target="_blank"
              >
                {" "}
                <img
                  src={workDayScheduler}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Workday Scheduler"
                />
              </a>
              <div>
                <h6 className="img-description">Interactive Demo</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>Workday Scheduler</h4>
              <p>
                This is a simple calendar application tailored for employees to
                manage their daily schedules effectively. The application allows
                users to save events for each hour of a typical workday
                (9AM-5PM) by modifying starter code. It leverages the Day.js
                library to handle date and time functionalities. The user story
                entails the need to add important events to a daily planner for
                efficient time management.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/Work-Day-Scheduler"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a
                href="https://memosphere-a4428ea90189.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <img
                  src={noteTaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note Taker"
                />
              </a>
              <div>
                <h6 className="img-description">Interactive Demo</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                The Note Taker is a user-friendly web app enabling note
                creation, saving, and deletion. Ideal for organizing thoughts,
                managing tasks, and storing essential information, it offers
                intuitive features such as note creation, saving, viewing, and
                deletion.{" "}
              </p>
              <br></br>
              <a
                href="https://github.com/TheOarsman/Express.js_Note_Taker"
                target="_blank"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
