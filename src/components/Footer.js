import React, { Component } from "react";
import "../index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-container">
          <div className="">
            <h1 className="grey-text text-lighten-4">Follow Me !</h1>

            <a href="https://www.linkedin.com/in/granthood21/">
              Linkedin{" "}
              <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
            </a>

            <a href="https://www.granthood.org/home">
              Website{" "}
              <img src="https://img.icons8.com/ios/50/000000/webpage.png" />
            </a>

            <a href="https://www.granthood.org/home">
              GihHub{" "}
              <img src="https://img.icons8.com/ios/50/000000/github--v1.png" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
