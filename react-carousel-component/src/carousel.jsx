import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isRunning: false,
      timeElapsed: 0
    });
  }

  render() {
    return (
      <div className='container row'>
        <img src=""></img>
        <i className='fas fa-chevron'></i>
        <i className='fas fa-chevron'></i>
        <i className='fas fa-chevron'></i>
        <i className='fas fa-chevron'></i>
        <i className='fas fa-chevron'></i>
      </div>
    );
  }
}
export default Carousel;
