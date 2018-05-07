import React, { Component } from 'react';
import { Card, Typography, IconButton, withStyles, Grid } from 'material-ui';
import { MoreVertIcon } from 'components/icons';

import { taskStyles } from 'assets/jss';

class Task extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={6} sm={4} md={3} lg={2} className={classes.gridContainer}>
        <Card className={classes.task}>
          <IconButton className={classes.optionsIcon}>
            <MoreVertIcon />
          </IconButton>
          <Typography variant="title" className={classes.taskTitle}>
            Esta es una tarea
          </Typography>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(taskStyles)(Task);
