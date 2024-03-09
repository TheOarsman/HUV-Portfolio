import React, { useState } from "react";
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
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      name: "Employee Tracker",
      description:
        "A SQL application, allowing for tracking of employees within a company.",
      imgUrl: employeeTracker, // imported image
      href: "https://github.com/TheOarsman/SQL_Employee_Tracker",
    },
    {
      name: "E-Commerce: Back-End ORM",
      description:
        "A back-end ORM for an E-Commerce website. Adding fluff because I need to for some reason.",
      imgUrl: eCommerce, // imported image
      href: "https://github.com/TheOarsman/ORM-E-Commerce-Back-End",
    },
    {
      name: "Password Generator",
      description:
        "A password generator for making a random password. Adding more filler here.",
      imgUrl: passWordGen, // imported image
      href: "https://github.com/TheOarsman/Rodnam-Proswasd-Gnereotar",
    },
    {
      name: "README Generator",
      description:
        "A Markdown file, that generates a professional README.md file.",
      imgUrl: readMeGen, // imported image
      href: "https://github.com/TheOarsman/README-Generator",
    },
    {
      name: "Slappi API",
      description:
        "A website for all things wonky and silly, that coders and programmers can have fun!",
      imgUrl: sillyAPI, // imported image
      href: "https://github.com/TheOarsman/slAPI",
    },
    {
      name: "Social Network",
      description:
        "An API for a social network site It does things and other stuff.",
      imgUrl: socialNetwork, // imported image
      href: "https://github.com/TheOarsman/Social-Network-API",
    },
    {
      name: "Weather Dashboard 1",
      description:
        "A Weather Dashboard 1 (site) for getting the weather in any US city, along with a 5-day forecast!",
      imgUrl: weatherDash1, // imported image
      href: "https://theoarsman.github.io/Weather_Dashboard_SS_API/",
    },
    {
      name: "Weather Dashboard 2",
      description:
        "A Weather Dashboard 2 (site) for getting the weather in any US city, along with a 5-day forecast!",
      imgUrl: weatherDash2, // imported image
      href: "https://theoarsman.github.io/Weather_Dashboard_SS_API/",
    },
    {
      name: "Workday Scheduler",
      description:
        "A SQL application, allowing for tracking of employees within a company.",
      imgUrl: workDayScheduler, // imported image
      href: "https://github.com/TheOarsman/Work-Day-Scheduler",
    },
  ];

  return (
    <div className="portfolio">
      <section id="work" className="jobs">
        <div className="grid-container">
          {jobs.map((job, index) => (
            <div
              className="job"
              key={index}
              onMouseEnter={() => setSelectedJob(index)}
              onMouseLeave={() => setSelectedJob(null)}
            >
              <div className="job-img">
                <a href={job.href}>
                  <img src={job.imgUrl} alt={job.name} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Job details box outside grid container */}
      {selectedJob !== null && (
        <div className="job-details-box">
          <h4>{jobs[selectedJob].name}</h4>
          <p>{jobs[selectedJob].description}</p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
