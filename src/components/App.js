import './App.css';
import React from 'react';
import Board from "./Board";
import Menu from "./Menu";
import StatusBar from "./StatusBar";

export default class App extends React.Component {
    state = {
        cards: 52,
    };

  render() {
      return (
        <div className="App">
          <StatusBar/>
          <Menu/>
          <Board/>
        </div>
      );
   }
}
