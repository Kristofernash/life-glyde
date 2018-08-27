import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import SideList from '../SideList/sideList';


import "./NavBar.css"; 

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    form: false,
  };

  loginClicked = () => {
    this.setState({ form: false })
  }

  signupClicked = () => {
    this.setState({ form: true })
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div> 
        <Button class="cornerBtn" onClick={this.toggleDrawer('right', true)}>Login/Signup</Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            // onClick={this.toggleDrawer('right', false)}
            // onKeyDown={this.toggleDrawer('right', false)}
          >
            <SideList history={this.props.history} classes={classes} loginClicked={this.loginClicked} signupClicked={this.signupClicked} form={this.state.form} />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);