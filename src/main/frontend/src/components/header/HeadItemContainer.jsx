import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  headItemContainer: {
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headItemContainerAuto: {
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  }
};

const HeadItemContainer = props => {
  const { classes, children, auto } = props;
  if (auto === true) {
    return <div className={classes.headItemContainerAuto}>{children}</div>;
  }
  return <div className={classes.headItemContainer}>{children}</div>;
};

export default withStyles(styles)(HeadItemContainer);
