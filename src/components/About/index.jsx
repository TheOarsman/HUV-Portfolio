import React from "react";
import profileImage from "../../assets/images/others/heinz.JPG";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hi, I'm Heinz Ulrich V, and I've always believed in leading by
            example and embracing new challenges. My journey began at Western
            Michigan University, where I earned a B.A. in Political Science with
            a Minor in Music. Little did I know that this academic foundation
            would pave the way for a dynamic career in the craft brewing
            industry, marked by leadership roles and a relentless pursuit of
            excellence.
          </p>
          <p>
            My time at Bell’s Brewery, Inc. in Kalamazoo, Michigan, and
            SweetWater Brewing Company, in Fort Collins, Colorado, was
            transformative. From managing packaging operations to coordinating
            with brewery management, I thrived in environments that demanded
            both strategic thinking and hands-on leadership. Over the years,
            I've honed my skills in team building, problem-solving, and
            operational optimization, all while fostering a culture of
            collaboration and continuous improvement.
          </p>
          <p>
            Beyond the brewery, I find joy in family life and outdoor
            adventures. Whether it's camping with loved ones or exploring nature
            through hiking and kayaking, I cherish these moments of connection
            and rejuvenation. My athletic background, including swimming at
            competitive levels and playing soccer, instilled in me a passion for
            teamwork and perseverance.
          </p>
          <p>
            Now, as I embark on a new chapter in web development through
            Michigan State University’s Coding Bootcamp, I'm excited to merge my
            analytical skills with my love for design. With a hunger for
            data-driven insights and a knack for problem-solving, I'm poised to
            make meaningful contributions to the digital landscape while
            continuing to embrace growth and learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
