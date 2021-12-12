import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isClicked: false });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <div className='flex'>
        <div className='toggleOuter'>
            <div className='toggleTrack on'></div>
            <div className='toggleBallOn'></div>
        </div>
        <div>ON</div>
      </div>
    );
  }
}
export default ToggleSwitch;
