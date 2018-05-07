import React from 'react';
import { Card, Typography, IconButton, withStyles, Grid } from 'material-ui';
import { MoreVertIcon } from 'components/icons';

import { taskStyles } from 'assets/jss';

const Task = props => {
  const { classes, title, priority, duration } = props;
  const setPriority = (priority, classes) => {
    switch (priority) {
      case null: {
        return classes.topSuccess;
      }
      case 'HIGH':
        return classes.topWarning;
      case 'MEDIUM':
        return classes.topPrecaution;
      case 'REALLY_HIGH':
        return classes.topDanger;
      default:
        return classes.topSuccess;
    }
  };

  return (
    <Grid item xs={6} sm={4} md={3} lg={2} className={classes.gridContainer}>
      <Card className={`${classes.task} ${setPriority(priority, classes)}`}>
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
