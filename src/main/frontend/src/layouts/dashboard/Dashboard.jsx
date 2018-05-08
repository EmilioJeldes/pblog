import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions';
import compose from 'recompose/compose';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui';

import { TaskBoard, Categories, Releases } from 'views';
import { dashboardStyle } from 'assets/jss';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchTasks();
    this.props.setSelectedBoard();
  }

  handleChangeIndex = index => {
    this.props.setSelectedBoard(index);
  };

  render() {
    const { classes, selectedBoard } = this.props;

    return (
      <div className={classes.background}>
        <SwipeableViews index={selectedBoard} onChangeIndex={this.handleChangeIndex}>
          <Categories />
          <TaskBoard />
          <Releases />
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = selectedBoard => {
  return selectedBoard;
};

export default compose(withStyles(dashboardStyle), connect(mapStateToProps, actions))(Dashboard);
