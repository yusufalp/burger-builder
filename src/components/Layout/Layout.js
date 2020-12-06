import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    }
    );
  }
  render() {
    return (
      <Aux>
        <div></div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidedrawer
          open={this.state.showSideDrawer}
          toggle={this.sideDrawerToggleHandler} />
        <main className='Content'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
export default Layout;