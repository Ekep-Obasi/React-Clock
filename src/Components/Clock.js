import "./Clock.css";
import { Component } from "react";

export default class Clock extends Component {
 constructor(){
  super()
  this.state ={
    date: this.updateTime
  }
 }

 componentDidMount(){
  this.interval = setInterval(this.updateTime.bind(this),1000)
 }

 updateTime(){
  const date = new Date();
  const dateString = date.toLocaleTimeString();
  this.setState({
    date: dateString,
  })
 }
  render() {
    return(
      <div className="clock">
        <h1>{this.state.date}</h1>
      </div>
    )
  }
  }
