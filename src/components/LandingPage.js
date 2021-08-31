import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import tetrispic from "./tetrispic.PNG";
export const LandingPage = () => {
  return (
    <div className="landing-page">
      <br />
      <br />
      <br />
      <h1>PastelTetris</h1>
      <h2>A modern and prettier take on the classic game of Tetris</h2>
      <img className="home-image" src={tetrispic}></img>
      <h3>
        Do you have what it takes to be a stack master? How many lines can you
        clear before you reach the top!
      </h3>
      <h4 className="directions">
        Use the buttons on screen or the keyboard arrow keys and spacebar to
        move, rotate and drop the shape into place!
      </h4>

      <br />
      <br />
      <br />
      <h4>Technologies Used:</h4>
      <ul>
        <li> • React</li>
        <li> • Redux</li>
        <li> • JSX</li>
        <li> • React-Bootstrap</li>
        <li> • CSS</li>
      </ul>
    </div>
  );
};

export default LandingPage;