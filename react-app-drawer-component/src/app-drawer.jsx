import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ showMenu: false });
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleMenuItems = this.handleMenuItems.bind(this);
  }

  handleOpenMenu() {
    this.setState({ showMenu: true });
  }

  handleMenuItems() {
    this.setState({ showMenu: false });
  }

  menuHidden() {
    return (this.state.showMenu ? '' : 'hidden');
  }

  render() {
    const hidden = this.menuHidden();
    return (
      <div>
        <div className='menu-bar' onClick={this.handleOpenMenu}>
          <i className='fas fa-bars'></i>
        </div>
        <div onClick={this.handleMenuItems} className={`drawer-outer ${hidden}`}>
          <nav className='drawer-content'>
            <h2>Choose a Game</h2>
            <a onClick={this.handleMenuItems} href="#">Minecraft</a>
            <a onClick={this.handleMenuItems} href="#">Fortnite</a>
            <a onClick={this.handleMenuItems} href="#">Pac-Man</a>
            <a onClick={this.handleMenuItems} href="#">Tetris</a>
          </nav>
        </div>
      </div>
    );
  }
}
export default AppDrawer;
