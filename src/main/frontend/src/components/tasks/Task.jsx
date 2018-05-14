import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Card, Typography, IconButton, withStyles, Grid } from 'material-ui';
import Menu, { MenuItem } from 'material-ui/Menu';
import { MoreVertIcon } from 'components/icons';

import { taskStyles } from 'assets/jss';
import { setClassPriority } from './constants';
import { fetchTasks, deleteTask } from 'redux/actions';

const optionsMenu = [{ name: 'Editar Tarea' }, { name: 'Eliminar tarea' }];

class Task extends PureComponent {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleDeleteTask = () => {
    this.handleClose();
    this.props.deleteTask(this.props.id).then(() => {
      this.props.fetchTasks();
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, title, priority, duration } = this.props;
    const { anchorEl } = this.state;
    return (
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Card className={`${classes.task} ${setClassPriority(priority, classes)}`}>
          <IconButton className={classes.optionsIcon} onClick={this.handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            getContentAnchorEl={null}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            {optionsMenu.map(el => (
              <MenuItem
                key={el.name}
                className={classes.menuItem}
                onClick={el.name === 'Eliminar tarea' ? this.handleDeleteTask : this.handleClose}
              >
                {el.name}
              </MenuItem>
            ))}
          </Menu>
          <IconButton className={classes.durationIcon}>
            <Typography variant="subheading">{`${duration}h`}</Typography>
          </IconButton>
          <Typography variant="title" className={classes.taskTitle}>
            {title}
          </Typography>
        </Card>
      </Grid>
    );
  }
}

export default compose(withStyles(taskStyles), connect(null, { fetchTasks, deleteTask }))(Task);
