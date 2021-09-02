
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "../reducers";

import GridBoard from "./grid-board";
import NextBlock from "./next-block";
import ScoreBoard from "./side-bar";
import Controls from "./controls";
import MessagePopup from "./message-popup";
import ScoreView from "./ScoreView";
import Footer from "./Footer";


import "../index.css";


const store = createStore(reducers);
// tetris app running state management
class Tetris extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ScoreView />
          <GridBoard />
          <NextBlock />
          <ScoreBoard />
          <Controls />
          <MessagePopup />
        </div>
        <br />
        <br />
        <br />
        <div className="lofi">
          <h2 className="font-color">
            Feel free to listen to some relaxing music while you play!
          </h2>
          <iframe
            width="560"
            height="250"
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Provider>
    );
  }
}

export default Tetris;
