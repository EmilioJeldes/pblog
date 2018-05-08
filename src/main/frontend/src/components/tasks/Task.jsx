import React from 'react';
import { Card, Typography, IconButton, withStyles, Grid } from 'material-ui';
import { MoreVertIcon } from 'components/icons';

import { taskStyles } from 'assets/jss';
import { setClassPriority } from './constants';

const Task = props => {
  const { classes, title, priority, duration } = props;

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card className={`${classes.task} ${setClassPriority(priority, classes)}`}>
        <IconButton className={classes.optionsIcon}>
          <MoreVertIcon />
        </IconButton>
        <IconButton className={classes.durationIcon}>
          <Typography variant="subheading">{`${duration}h`}</Typography>
        </IconButton>
        <Typography variant="title" className={classes.taskTitle}>
          {title}
        </Typography>
      </Card>
    </Grid>
  );
};

export default withStyles(taskStyles)(Task);
