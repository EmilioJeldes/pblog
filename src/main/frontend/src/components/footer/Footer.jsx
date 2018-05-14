import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import * as actions from 'redux/actions';
import { BottomNavigation, withStyles, BottomNavigationAction } from '@material-ui/core';

import { LineWeightIcon, DashboardIcon, ReleaseIcon } from 'components/icons';
import { footerStyle } from 'assets/jss';

class Footer extends PureComponent {
  handleChange = (event, index) => {
    this.props.setSelectedBoard(index);
  };

  render() {
    const { classes, selectedBoard } = this.props;

    return (
      <BottomNavigation
        className={classes.bottomNavigation}
        value={selectedBoard}
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

const mapStateToProps = selectedBoard => {
  return selectedBoard;
};

export default compose(withStyles(footerStyle), connect(mapStateToProps, actions))(Footer);
