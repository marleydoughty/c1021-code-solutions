import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isOpen: false });
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleMenuSlide() {
    this.setState({ isOpen: true });
  }

  render() {
    const menuBar = <i className='fas fa-bars'></i>;
    return (
      <>
      <div className='menu-bar'>
        {menuBar}
      </div>
      <div>
        <nav className='slide-drawer hidden'>
          <h2>MENU</h2>
          <a>About</a>
          <a>Get Started</a>
          <a>Sign in</a>
          <a>Sign up</a>
        </nav>
      </div>
      </>
    );
  }
}
export default AppDrawer;
