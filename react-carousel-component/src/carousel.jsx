import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentImgIndex: 0
    });
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
    // this.handleInterval = this.handleInterval.bind(this);
  }

  leftClick() {
    this.setState(
      { currentImgIndex: (this.state.currentImgIndex - 1 + this.props.imageUrl.length) % this.props.imageUrl.length });
  }

  rightClick() {
    this.setState(
      { currentImgIndex: (this.state.currentImgIndex + 1) % this.props.imageUrl.length });
  }

  dotClick() {
    this.setState({ currentImgIndex: Number(event.target.id) });
  }

  // handleInterval() {
  //   this.interval = setInterval(() => {
  //     this.rightClick();
  //   }, 3000);
  // }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.props.imageUrl.map((image, index) => (
            <div key={index} className={this.state.currentImgIndex === index ? 'row' : 'hidden'}>
              <div><i onClick={this.leftClick} className='fas fa-chevron-left fa-3x left'></i></div>
              <div className='image-container'><img src={image}></img></div>
              <div><i onClick={this.rightClick} className='fas fa-chevron-right fa-3x right'></i></div>
            </div>
          ))}
        </div>
        <div className='dots'>
          {this.props.imageUrl.map((image, index) => (
            <i id={index} key={index} onClick={this.dotClick} className={this.state.currentImgIndex === index ? 'fas fa-circle' : 'far fa-circle'}></i>
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
