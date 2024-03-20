import React, { useState } from "react";
import employeeTracker from "../../assets/images/projectIMGs/employee_tracker.jpg";
import eCommerce from "../../assets/images/projectIMGs/orm_e_commerce.png";
import passWordGen from "../../assets/images/projectIMGs/PsswrdGnrtr.png";
import readMeGen from "../../assets/images/projectIMGs/readme_generator.jpg";
import sillyAPI from "../../assets/images/projectIMGs/SillyAPI.jpg";
import socialNetwork from "../../assets/images/projectIMGs/social_network_api.png";
import weatherDash1 from "../../assets/images/projectIMGs/weather_dashboard1.png";
import workDayScheduler from "../../assets/images/projectIMGs/work_day_scheduler.jpg";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="work-heading">
          <h2 className="section-title secondary-border">Work</h2>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/aUWs9hD5Fr8">
                {" "}
                <img
                  src={employeeTracker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Employee Tracker"
                />
              </a>
              <div>
                <h6 class="img-description">Video Demonstration</h6>
              </div>
            </div>
            <div className="job-text">
              <h4>Employee Tracker</h4>
              <p>
                This command-line application serves as a Content Management
                System (CMS) designed for managing a company's employee database
                efficiently. With the integration of the Inquirer and MySQL2
                packages, users, particularly business owners, can seamlessly
                view and interact with information stored in the database. Its
                primary features include the ability to manage departments,
                roles, and employees, empowering business owners to organize and
                plan their business effectively.{" "}
              </p>
              <br></br>
              <a href="https://github.com/TheOarsman/SQL_Employee_Tracker">
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/XMI2PqBvzY8">
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
              <a href="https://github.com/TheOarsman/ORM-E-Commerce-Back-End">
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://theoarsman.github.io/Rodnam-Proswasd-Gnereotar/">
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
              <a href="https://github.com/TheOarsman/Rodnam-Proswasd-Gnereotar">
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/Oqe-QMF2NqM">
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
              <a href="https://github.com/TheOarsman/README-Generator">
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/TheOarsman/slAPI">
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
              <a href="https://github.com/TheOarsman/ORM-E-Commerce-Back-End">
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://youtu.be/7Mlw5yssC3w">
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
              <a href="https://github.com/TheOarsman/Social-Network-API">
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://theoarsman.github.io/Weather_Dashboard_SS_API/">
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
              <a href="https://github.com/TheOarsman/Weather_Dashboard_SS_API">
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://theoarsman.github.io/Work-Day-Scheduler/">
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
              <a href="https://github.com/TheOarsman/Work-Day-Scheduler">
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
