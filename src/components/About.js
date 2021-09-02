import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import backgroundimage from "../assets/backgroundimage.jpg"
export const About = () => {
  return (
    <div className="landing-page">
      <h3 className="font-color">PastelTetris was made by Grant Hood</h3>
      <img className="about-image" src={backgroundimage} />
      <p className="font-color">
        My name is Grant Hood and I am a Front End Web Developer working to
        improve my skills and transfer careers from retail management to a front
        end developer role.
      </p>

      <p>
        I chose to remake the classic game of Tetris because I have been a long
        time player, and that it's a very easy game that helps exercise space
        management in your brain!
      </p>

      <a href="https://www.granthood.org/home">
        <img src="https://img.icons8.com/ios/100/000000/webpage.png" />
      </a>

      <a href="https://github.com/boundsounds">
        <img src="https://img.icons8.com/ios/100/000000/github--v2.png" />
      </a>
      <a href="https://www.linkedin.com/in/granthood21/">
        <img src="https://img.icons8.com/ios/100/000000/linkedin.png" />
      </a>
      <a href="mailto: grant.hood21@gmail.com">
        <img src="https://img.icons8.com/ios/100/000000/apple-mail.png" />
      </a>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
