import React from "react";
import gitHubFooterIMG from "../../assets/images/footer/githubfooter.png";
import linkedInFooterIMG from "../../assets/images/footer/linkedinfooter.png";
import youTubeFooterIMG from "../../assets/images/footer/youtubefooter.png";
import gmailFooterIMG from "../../assets/images/footer/gmailfooter.png";

function Footer() {
  return (
    <footer>
      <h2>Made by Heinz Ulrich V©</h2>
      <p>
        <ul>
          <li>
            <a href="https://www.github.com/TheOarsman">
              <img src={gitHubFooterIMG} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/heinz-ulrich-v-3a3486a0/">
              <img src={linkedInFooterIMG} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@theoarsman4581">
              <img src={youTubeFooterIMG} />
            </a>
          </li>
          <li>
            <a href="mailto:heinzulrichv@gmail.com">
              <img src={gmailFooterIMG} />
            </a>
          </li>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
