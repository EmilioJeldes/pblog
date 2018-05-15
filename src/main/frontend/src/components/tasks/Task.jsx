import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Card, Typography, IconButton, withStyles, Grid, Menu, MenuItem } from '@material-ui/core';

import { MoreVertIcon } from 'components/icons';
import { TextArea, OutsideAlerter } from 'components';
import { taskStyles } from 'assets/jss';
import { setClassPriority } from './constants';
import { fetchTasks, deleteTask } from 'redux/actions';

const optionsMenu = [{ name: 'Editar Tarea' }, { name: 'Eliminar tarea' }];

class Task extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      isEditable: false,
      title: this.props.title || ''
    };
  }

  openOptions = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeOptions = () => {
    this.setState({ anchorEl: null });
  };

  handleDeleteTask = () => {
    this.closeOptions();
    this.props.deleteTask(this.props.id).then(() => {
      this.props.fetchTasks();
    });
  };

  toggleEditTask = () => {
    this.setState({ isEditable: !this.state.isEditable });
    this.closeOptions();
	};
	
	stopEditingTask = () => {
		this.setState({ isEditable: false });
    this.closeOptions();
	}

  handleSubmitTask = () => {};

  handleRenderEditTask = () => {
    const { classes } = this.props;
    const { title, isEditable } = this.state;

    return isEditable ? (
      <form onSubmit={this.handleSubmitTask}>
        <TextArea
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
    const { classes, priority, duration } = this.props;
    const { anchorEl } = this.state;

    return (
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Card className={`${classes.task} ${setClassPriority(priority, classes)}`}>
          <IconButton className={classes.optionsIcon} onClick={this.openOptions}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            getContentAnchorEl={null}
            onClose={this.closeOptions}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {optionsMenu.map(el => (
              <MenuItem
                key={el.name}
                className={classes.menuItem}
                onClick={el.name === 'Eliminar tarea' ? this.handleDeleteTask : this.toggleEditTask}
              >
                {el.name}
              </MenuItem>
            ))}
          </Menu>
          <IconButton className={classes.durationIcon}>
            <Typography variant="subheading">{`${duration}h`}</Typography>
          </IconButton>
          <OutsideAlerter clickOutside={this.stopEditingTask}>
            {this.handleRenderEditTask()}
          </OutsideAlerter>
        </Card>
      </Grid>
    );
  }
}

export default compose(withStyles(taskStyles), connect(null, { fetchTasks, deleteTask }))(Task);
