import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isRunning: false,
      timeElapsed: 0
    });
    this.incrementor = null;
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.addToTimer = this.addToTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
  }

  addToTimer() {
    this.setState(
      { timeElapsed: this.state.timeElapsed + 1 });
  }

  handleStartTimer() {
    this.incrementor = setInterval(this.addToTimer, 1000
    );
    this.setState({
      isRunning: true
    });
  }

  handleStopTimer() {
    clearInterval(this.incrementor);
    this.setState({
      isRunning: false,
      timeElapsed: 0
    });
  }

  render() {
    let button;
    if (this.state.isRunning) {
      button = <button className="stopwatch-button" onClick={this.handleStopTimer} ><img src="./pause.svg" /></button>;
    } else {
      button = <button className="stopwatch-button" onClick={this.handleStartTimer} ><img src="./play.svg" /></button>;
    }
    return (
      <div className='container'>
        <div className='outer'>
          <div className='inner'>{this.state.timeElapsed}</div>
        </div>
        {button}
      </div>
    );
  }
}
export default Stopwatch;
