import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isClicked: true });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let className = 'off';
    if (this.state.isClicked) {
      className = 'on';
    }
    return (
      <div onClick={this.handleClick} className='flex'>
        <div className={'toggleOuter ' + className}>
            <div className='toggleTrack'></div>
            <div className='toggleBall'></div>
        </div>
        <div>{this.state.isClicked ? 'ON' : 'OFF'}</div>
      </div>
    );
  }
}
export default ToggleSwitch;
