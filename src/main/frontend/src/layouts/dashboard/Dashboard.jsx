import React, { Component } from 'react';
import { Grid, withStyles } from 'material-ui';
import { Task } from 'components';

const styles = theme => ({
  body: {
    padding: '15px 15px 70px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '95%'
    },
    margin: 'auto'
  },
  background: {
    backgroundColor: '#EFEFEF',
    width: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <Grid container justify="space-around" spacing={8} className={classes.body}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
