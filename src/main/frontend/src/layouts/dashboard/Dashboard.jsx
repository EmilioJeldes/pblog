import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import * as actions from 'redux/actions';
import { Grid, withStyles } from 'material-ui';

import { Task } from 'components';
import { dashboardStyle } from 'assets/jss';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks(tasks) {
    if (tasks === null) {
      /* TODO: Change what to display while waiting the response */
      return <div>Loading tasks</div>;
    } else {
      let taskList = [];
      // eslint-disable-next-line
      tasks.map(t => {
        taskList.push(
          <Task key={t.id} title={t.task_name} priority={t.priority} duration={t.duration} />
        );
      });
      return taskList[0] === null ? <div>No hay tareas</div> : taskList;
    }
  }

  render() {
    const { classes, tasks } = this.props;
    console.log(tasks);

    return (
      <div className={classes.background}>
        <Grid container justify="space-around" spacing={8} className={classes.body}>
          {this.renderTasks(tasks)}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = tasks => {
  return tasks;
};

export default compose(withStyles(dashboardStyle), connect(mapStateToProps, actions))(Dashboard);
