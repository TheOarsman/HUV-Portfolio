import React from "react";
// import { VscGithubAlt } from "react-icons/vsc";
// import { AiOutlineLinkedin } from "react-icons/ai";
// import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Heinz Ulrich V©</h2>
      <p>
        <ul>
          <li>
            <a href="https://www.github.com/TheOarsman">
              <img src="assets/images/footer/githubfooter.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/heinz-ulrich-v-3a3486a0/">
              <img
                src="assets/images/footer/linkedinfooter.png"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@theoarsman4581">
              <img src="assets/images/footer/youtubefooter.png" alt="YouTube" />
            </a>
          </li>
          <li>
            <a href="mailto:heinzulrichv@gmail.com">
              <img src="assets/images/footer/gmailfooter.png" alt="Gmail" />
            </a>
          </li>
          {/* <a href="https://github.com/TheOarsman">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/lindsey-m-2219abb0/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/lem_photos/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a> */}
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
