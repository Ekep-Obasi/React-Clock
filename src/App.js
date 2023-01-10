import "./App.css";
import { Component } from "react";
import Clock from "./Components/Clock";
import StopWatch from "./Components/StopWatch";

export default class App extends Component {
  render() {
    return(
      <div className="app">
        <div className="wrapper">
        <Clock />
        <StopWatch />
        </div>
      </div>
    )
  }
  }
