import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { BottomNavigation } from 'material-ui';
import { BottomNavigationAction } from 'material-ui/BottomNavigation';

import { LineWeightIcon, DashboardIcon, ReleaseIcon } from 'components/icons';
import { footerStyle } from 'assets/jss';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        className={classes.bottomNavigation}
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="Categorías" icon={<LineWeightIcon />} />
        <BottomNavigationAction label="Tareas" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Lanzamientos" icon={<ReleaseIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(footerStyle)(Footer);
