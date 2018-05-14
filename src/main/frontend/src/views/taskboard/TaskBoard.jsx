import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Grid, withStyles, Typography } from 'material-ui';
import { Scrollbars } from 'react-custom-scrollbars';

import { taskboardStyle } from 'assets/jss';
import { Task, TaskFormDialog } from 'components';

class TaskBoard extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tasks !== nextProps.tasks;
  }
  /* TODO: Change what to display while waiting the response */
  renderTasks = tasks =>
    tasks === null ? (
      <Typography variant="subheading">Crea tus tareas</Typography>
    ) : (
      tasks.map(t => (
        <Task key={t.id} id={t.id} title={t.task_name} priority={t.priority} duration={t.duration} />
      ))
    );

  render() {
    const { classes, tasks } = this.props;
    return (
      <div className={classes.root}>
        <Scrollbars>
          <Grid container justify="space-around" spacing={16} className={classes.grid}>
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

export default compose(withStyles(taskboardStyle), connect(mapStateToProps, null))(TaskBoard);
