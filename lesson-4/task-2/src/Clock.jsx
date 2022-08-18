import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};
const formatDate = date => moment(date).format('h:mm:ss a');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: formatDate(getTimeWithOffset(props.offset + 1)),
    };
    setInterval(() => {
      this.setState({
        time: formatDate(getTimeWithOffset(props.offset + 1)),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}
export default Clock;
