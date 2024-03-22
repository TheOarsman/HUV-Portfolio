import React from "react";
import gitHubFooterIMG from "../../assets/images/footer/githubfooter.png";
import linkedInFooterIMG from "../../assets/images/footer/linkedinfooter.png";
import youTubeFooterIMG from "../../assets/images/footer/youtubefooter.png";
import gmailFooterIMG from "../../assets/images/footer/gmailfooter.png";

function Footer() {
  return (
    <footer>
      <h2>Made by Heinz Ulrich V©</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          className="logo"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <a
            href="https://www.github.com/TheOarsman"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHubFooterIMG} alt="GitHub" height="26" width="26" />
          </a>
        </li>
        <li
          className="logo"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <a
            href="https://www.linkedin.com/in/heinz-ulrich-v-3a3486a0/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedInFooterIMG}
              alt="LinkedIn"
              height="26"
              width="26"
            />
          </a>
        </li>
        <li
          className="logo"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <a
            href="https://www.youtube.com/@theoarsman4581"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youTubeFooterIMG} alt="YouTube" height="26" width="26" />
          </a>
        </li>
        <li className="logo" style={{ display: "inline-block" }}>
          <a href="mailto:heinzulrichv@gmail.com">
            <img src={gmailFooterIMG} alt="Gmail" height="26" width="26" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
