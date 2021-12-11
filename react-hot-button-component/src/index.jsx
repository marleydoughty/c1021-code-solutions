import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      clicks: 0
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const count = this.state.clicks + 1;
    if (count > 18) {
      this.setState({ className: 'white', clicks: count });
    } else if (count > 15) {
      this.setState({ className: 'yellow', clicks: count });
    } else if (count > 12) {
      this.setState({ className: 'orange', clicks: count });
    } else if (count > 9) {
      this.setState({ className: 'red', clicks: count });
    } else if (count > 6) {
      this.setState({ className: 'purple', clicks: count });
    } else if (count > 3) {
      this.setState({ className: 'dark-purple', clicks: count });
    } else {
      this.setState({ clicks: count });
    }
  }

  render() {
    return <button className={this.state.className} onClick={this.handleClick}>Hot Button</button>;
  }
}

const element = (
  <HotButton/>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
