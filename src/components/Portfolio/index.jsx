import React from "react";
import employeeTracker from "../../assets/images/projectIMGs/employee_tracker.jpg";
import eCommerce from "../../assets/images/projectIMGs/orm_e_commerce.png";
import passWordGen from "../../assets/images/projectIMGs/PsswrdGnrtr.png";
import readMeGen from "../../assets/images/projectIMGs/readme_generator.jpg";
import sillyAPI from "../../assets/images/projectIMGs/SillyAPI.jpg";
import socialNetwork from "../../assets/images/projectIMGs/social_network_api.png";
import weatherDash1 from "../../assets/images/projectIMGs/weather_dashboard1.png";
import weatherDash2 from "../../assets/images/projectIMGs/weather_dashboard2.png";
import workDayScheduler from "../../assets/images/projectIMGs/work_day_scheduler.jpg";

function Portfolio() {
  return (
    <div className="portfolio">
      <section id="work" className="jobs">
        <div className="grid-container">
          <div className="job">
            <div classname="job-img">
              <a href="https://github.com/TheOarsman/SQL_Employee_Tracker">
                {" "}
                <img src={employeeTracker} alt="Employee Tracker" />
              </a>
            </div>
            <div className="job-details">
              <h4>Employee Tracker</h4>
              <p>
                A SQL application, allowing for tracking of employees within a
                company.{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://github.com/TheOarsman/ORM-E-Commerce-Back-End">
                {" "}
                <img src={eCommerce} alt="E-Commerce" />
              </a>
            </div>
            <div className="job-details">
              <h4>E-Commerce: Back-End ORM</h4>
              <p>
                A back-end ORM for an E-Commerce website. Adding fluff because I
                need to for some reason.{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://github.com/TheOarsman/Rodnam-Proswasd-Gnereotar">
                {" "}
                <img src={passWordGen} alt="Password Generator" />
              </a>
            </div>
            <div className="job-details">
              <h4>Password Generator</h4>
              <p>
                A password generator for making a random password. Adding more
                filler here.{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://github.com/TheOarsman/README-Generator">
                {" "}
                <img src={readMeGen} alt="Readme Generator" />
              </a>
            </div>
            <div className="job-details">
              <h4>README Generator</h4>
              <p>
                A Markdown file, that generates a professional README.md file.{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://github.com/TheOarsman/slAPI">
                {" "}
                <img src={sillyAPI} alt="Silly API" />
              </a>
            </div>
            <div className="job-details">
              <h4>Slappi API</h4>
              <p>
                A website for all things wonky and silly, that coders and
                programmers can have fun!{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://github.com/TheOarsman/Social-Network-API">
                {" "}
                <img src={socialNetwork} alt="Social Network" />
              </a>
            </div>
            <div className="job-details">
              <h4>Social Network</h4>
              <p>
                An API for a social network site It does things and other stuff.{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://theoarsman.github.io/Weather_Dashboard_SS_API/">
                {" "}
                <img src={weatherDash1} alt="Weather Dashboard" />
              </a>
            </div>
            <div className="job-details">
              <h4>Weather Dashboard</h4>
              <p>
                A Weather Dashboard (site) for getting the weather in any US
                city, along with a 5-day forecast!{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://theoarsman.github.io/Weather_Dashboard_SS_API/">
                {" "}
                <img src={weatherDash2} alt="Weather Dashboard" />
              </a>
            </div>
            <div className="job-details">
              <h4>Weather Dashboard</h4>
              <p>
                A Weather Dashboard (site) for getting the weather in any US
                city, along with a 5-day forecast!{" "}
              </p>
            </div>
          </div>

          <div className="job">
            <div classname="job-img">
              <a href="https://theoarsman.github.io/Work-Day-Scheduler/">
                {" "}
                <img src={workDayScheduler} alt="Workday Scheduler" />
              </a>
            </div>
            <div className="job-details">
              <h4>Workday Scheduler</h4>
              <p>
                A scheduler/planner for map out your day. Give current times,
                and allows you to schedule events during the day.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
