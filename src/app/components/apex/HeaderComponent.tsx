import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export default class HeaderComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar title="Josu Dashboard " iconClassNameRight="muidocs-icon-navigation-expand-more" onTitleTouchTap={this.handleToggle} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <AppBar title="Josu" />
          <MenuItem onTouchTap={this.handleClose}> <Link to="/classtimings">Class Timings</Link> </MenuItem>
          <hr />
          <MenuItem onTouchTap={this.handleClose}> <Link to="/studentpayments">Student Payments</Link> </MenuItem>
          <hr />
          <MenuItem onTouchTap={this.handleClose}> <Link to="/teacherpayments">Teacher Payments</Link> </MenuItem>
          <hr />
        </Drawer>
      </div>
    );
  }
}