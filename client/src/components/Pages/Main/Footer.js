import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div id="footer_div">
        <div id="footer_leftbox">
          <div className="footer_gitid">
            <FontAwesomeIcon icon={faGithub} /> changmoolee
          </div>
          <div className="footer_gitid">
            <FontAwesomeIcon icon={faGithub} /> dpemdnjem23
          </div>
        </div>
        <div id="footer_rightbox">
          <div className="footer_gitid">
            <FontAwesomeIcon icon={faGithub} /> kimvayne
          </div>
          <div className="footer_gitid">
            <FontAwesomeIcon icon={faGithub} /> starguys
          </div>
        </div>
      </div>
    </>
  );
}
