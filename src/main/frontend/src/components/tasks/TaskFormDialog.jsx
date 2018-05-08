import React, { Component, Fragment } from 'react';
import { withStyles, Button, Dialog, TextField, DialogContent, InputAdornment } from 'material-ui';
import MenuItem from 'material-ui/Menu/MenuItem';

import { taskformdialogStyle } from 'assets/jss';
import { AddIcon } from 'components/icons';
import { setClassPriority, priorities } from './constants';

class TaskFormDialog extends Component {
  state = {
    open: false,
    taskName: '',
    priority: 'LOW',
    duration: 0,
    description: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = prop => ({ target }) => {
    this.setState({ [prop]: target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          onClick={this.handleClickOpen}
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}
        >
          <AddIcon />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogContent
            className={`${classes.taskForm} ${setClassPriority(this.state.priority, classes)}`}
          >
            <TextField
              value={this.state.taskName}
              onChange={this.handleChange('taskName')}
              autoFocus
              margin="dense"
              id="task_name"
              label="Tarea"
              helperText="Nombre de la tarea"
              type="text"
              className={classes.input}
              fullWidth
            />
            <div style={{ display: 'flex' }}>
              <TextField
                value={this.state.duration}
                onChange={this.handleChange('duration')}
                margin="dense"
                id="duration"
                label="Duracion"
                type="number"
                className={classes.input}
                helperText="Duracion en horas"
                InputProps={{
                  startAdornment: <InputAdornment position="start">Hrs</InputAdornment>
                }}
              />
              <TextField
                select
                value={this.state.priority}
                onChange={this.handleChange('priority')}
                className={`${classes.input} ${classes.basis}`}
                margin="dense"
                id="priority"
                label="Prioridad de tarea"
                type="text"
                helperText="Prioridad de tarea"
              >
                {priorities.map(priority => (
                  <MenuItem key={priority.type} value={priority.type}>
                    {priority.translate}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <TextField
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin="dense"
              id="description"
              label="Descripción"
              helperText="Historia de usuario"
              type="text"
              className={classes.input}
              fullWidth
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(taskformdialogStyle)(TaskFormDialog);
