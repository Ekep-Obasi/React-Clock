import "./StopWatch.css";
import { Component } from "react";


export default class stopWatch extends Component {
  constructor() {
    super();
    this.state = {
      millisec: 0,
      sec: 0,
      min: 0,
      hour: 0,
      count: 0,
    };
  }

  timeCounter() {
    this.setState({
      millisec:
        this.state.millisec === 1000 ? 0 : (this.state.millisec + 1) % 1001,
      sec: this.state.millisec === 100 ? this.state.sec + 1 : this.state.sec,
      min: this.state.sec === 60 ? this.state.min + 1 : this.state.min,
      hour: this.state.min === 60 ? this.state.hour + 1 : this.state.hour,
    });
  }

  startStop() {
    this.interval = setInterval(this.timeCounter.bind(this), 0.001);
    // const intervalId = this.interval;
    // alert(intervalId);
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // if (this.state.count === 1) {
    //   this.setState({
    //     count: 0,
    //   });
    //   clearTimeout(intervalId);
    // }
  }

  render() {
    return (
      <div className="stopWatch">
        <div>
          {this.state.hour}:{this.state.min}:{this.state.sec}:
          {this.state.millisec}
        </div>
        <button onClick={this.startStop.bind(this)}>Stop/Start</button>
      </div>
    );
  }
}
