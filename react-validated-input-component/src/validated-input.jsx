import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ value: '' });
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let errMsg;
    let icon;
    if (!this.state.value) {
      errMsg = <p>A password is required</p>;
      icon = <i className='fas fa-times invalid'></i>;
    } else if (this.state.value.length < 8) {
      errMsg = <p>Your password is too short</p>;
      icon = <i className='fas fa-times invalid'></i>;
    } else {
      icon = <i className='fas fa-check valid'></i>;
    }
    return (
      <>
        <div>Password</div>
        <form>
          <input type="password" value={this.state.value} onChange={this.handleChange}></input>
          <div>
            {icon}
          </div>
        </form>
        <div>
          {errMsg}
        </div>
      </>
    );
  }
}

export default ValidateInput;
