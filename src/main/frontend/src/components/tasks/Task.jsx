import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Card, Typography, IconButton, withStyles, Grid } from '@material-ui/core';

import { TextArea, OutsideAlerter, PriorityMenu, EditTaskMenu } from 'components';
import { taskStyles } from 'assets/jss';
import { setClassPriority } from './constants';
import { fetchTasks, deleteTask, updateTask } from 'redux/actions';

class Task extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false,
      title: this.props.title || '',
      priority: this.props.priority || 'LOW'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isEditable === true &&
      this.state.isEditable === false &&
      this.state.title !== this.props.title
    ) {
      this.handleSubmitTask();
    }
  }

  setPriority = ({ target: { value } }) => {
    this.setState({ priority: value });
    setTimeout(() => {
      this.handleSubmitTask();
    }, 50);
  };

  handleDeleteTask = () => {
    this.props.deleteTask(this.props.id).then(() => {
      this.props.fetchTasks();
    });
  };

  editTask = () => {
    this.setState({ isEditable: true });
  };

  stopEditingTask = () => {
    this.setState({ isEditable: false });
  };

  handleSubmitTask = () => {
    const { id, duration, description, state } = this.props;
    let task = {
      priority: this.state.priority,
      duration,
      description,
      state,
      task_name: this.state.title
    };
    this.props.updateTask(id, task).then(() => {
      this.props.fetchTasks();
    });
  };

  handleRenderEditTask = () => {
    const { classes } = this.props;
    const { title, isEditable } = this.state;

    return isEditable ? (
      <form onSubmit={this.handleSubmitTask}>
        <TextArea
          handleSubmit={this.handleSubmitTask}
          value={title}
          changeValue={event => {
            this.setState({ title: event.target.value });
          }}
        />
      </form>
    ) : (
      <Typography variant="title" className={classes.taskTitle}>
        {title}
      </Typography>
    );
  };

  render() {
    const { classes, priority, duration, id } = this.props;

    return (
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Card className={`${classes.task}`}>
          <div className={`${classes.cardStatus} ${setClassPriority(priority, classes)}`}>
            <PriorityMenu id={id} setPriority={event => this.setPriority(event)} />
            <EditTaskMenu
              id={this.props.id}
              editTask={this.editTask}
              isEditable={this.state.isEditable}
            />
          </div>
          <div className={classes.cardContent}>
            <OutsideAlerter clickOutside={this.stopEditingTask}>
              {this.handleRenderEditTask()}
            </OutsideAlerter>
            {/* <button onClick={() => this.handleSubmitTask()}>asd</button> */}
          </div>
          <IconButton className={classes.durationIcon}>
            <Typography style={{ fontSize: '15px' }}>{`${duration}h`}</Typography>
          </IconButton>
        </Card>
      </Grid>
    );
  }
}

export default compose(
  withStyles(taskStyles),
  connect(
    null,
    { fetchTasks, deleteTask, updateTask }
  )
)(Task);
