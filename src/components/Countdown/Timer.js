import React, { Component } from 'react';
import './Timer.css';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: ''
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    const now = new Date().getTime();
    const t = this.deadline - now;
    const dd = Math.floor(t / (1000 * 60 * 60 * 24));
    const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const ss = Math.floor((t % (1000 * 60)) / 1000);

    let days = dd < 10 ? '0' + dd : dd;
    let hours = hh < 10 ? '0' + hh : hh;
    let minutes = mm < 10 ? '0' + mm : mm;
    let seconds = ss < 10 ? '0' + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: 'TIME IS UP'
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date('Jul 01, 2023 23:00:00').getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div id="countdown">
        <div className="col-4">
          <div className="box">
            <p id="day">{days}</p>
            <span className="text">Days</span>
          </div>
        </div>
        <div className="separation">
          <span>:</span>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="hour">{hours}</p>
            <span className="text">Hours</span>
          </div>
        </div>
        <div className="separation">
          <span>:</span>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="minute">{minutes}</p>
            <span className="text">Minutes</span>
          </div>
        </div>
        <div className="separation">
          <span>:</span>
        </div>
        <div className="col-4">
          <div className="box">
            <p id="second">{seconds}</p>
            <span className="text">Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
