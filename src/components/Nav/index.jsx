import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentTab, handleTabChange }) {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            onClick={() => handleTabChange("About")}
            // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="portfolio"
            onClick={() => handleTabChange("Portfolio")}
            // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentTab === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            onClick={() => handleTabChange("Contact")}
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentTab === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="resume"
            onClick={() => handleTabChange("Resume")}
            // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
