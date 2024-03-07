import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Heinz Ulrich V's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section className="hero-welcome">
        <div className="hero-cta-welcome">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

          <h2>Welcome</h2>
          <p>
            Welcome to Heinz Ulrich V's portfolio. Here, you can find a small
            sample of the projects he has created while enrolled in Michigan
            State University's Full Stack Web Development Bootcamp.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
