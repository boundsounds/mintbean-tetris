import React, { Component } from "react";
import "../index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-container">
          <div className="font-color">
            <h1 className="grey-text text-lighten-4">Follow Me !</h1>

            <a
              className="font-color"
              href="https://www.linkedin.com/in/granthood21/"
            >
              Linkedin{" "}
              <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
            </a>

            <a className="font-color" href="https://www.granthood.org/home">
              Website{" "}
              <img src="https://img.icons8.com/ios/50/000000/webpage.png" />
            </a>

            <a className="font-color" href="https://www.granthood.org/home">
              GitHub{" "}
              <img src="https://img.icons8.com/ios/50/000000/github--v1.png" />
            </a>
            <a className="font-color" href="mailto: grant.hood21@gmail.com">
              Email
              <img src="https://img.icons8.com/ios/50/000000/apple-mail.png" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
