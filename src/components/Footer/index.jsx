import React from "react";
import { GitHubFooterIMG } from "src/assets/images/footer/githubfooter.png";
import { LinkedInFooterIMG } from "src/assets/images/footer/linkedinfooter.png";
import { YouTubeFooterIMG } from "src/assets/images/footer/youtubefooter.png";
import { GmailFooterIMG } from "src/assets/images/footer/gmailfooter.png";

function Footer() {
  return (
    <footer>
      <h2>Made by Heinz Ulrich V©</h2>
      <p>
        <ul>
          <li>
            <a href="https://www.github.com/TheOarsman">
              <GitHubFooterIMG />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/heinz-ulrich-v-3a3486a0/">
              <LinkedInFooterIMG />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@theoarsman4581">
              <YouTubeFooterIMG />
            </a>
          </li>
          <li>
            <a href="mailto:heinzulrichv@gmail.com">
              <GmailFooterIMG />
            </a>
          </li>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
