import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import _ from 'lodash';
import { Grid, withStyles, Typography } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

import { taskboardStyle } from '../../assets/jss';
import { Task, TaskFormDialog } from '../../components';

class TaskBoard extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tasks !== nextProps.tasks;
  }
  /* TODO: Change what to display while waiting the response */
  renderTasks = tasks =>
    tasks === null ? (
      <Typography variant="subheading">Crea tus tareas</Typography>
    ) : (
      _.map(tasks, task => (
        <Task
          key={task.id}
          id={task.id}
          title={task.task_name}
          priority={task.priority}
					duration={task.duration}
					description={task.description}
					state={task.state}
        />
      ))
    );

  render() {
    const { classes, tasks } = this.props;
    return (
      <div className={classes.root}>
        <Scrollbars>
          <Grid container justify="center" spacing={16} className={classes.grid}>
            {this.renderTasks(tasks)}
          </Grid>
        </Scrollbars>
        <TaskFormDialog />
      </div>
    );
  }
}

const mapStateToProps = tasks => {
  return tasks;
};

export default compose(
  withStyles(taskboardStyle, { withTheme: true }),
  connect(mapStateToProps, null)
)(TaskBoard);
