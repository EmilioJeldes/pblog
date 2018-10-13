import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import compose from 'recompose/compose';
import {
  withStyles,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  MenuItem,
  Zoom
} from '@material-ui/core';

import { taskformdialogStyle } from 'assets/jss';
import { AddIcon } from 'components/icons';
import { priorities, validate, renderSelectField, renderTextField } from './constants';
import * as actions from 'redux/actions';

class TaskFormDialog extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = values => {
    this.props.createTask(values).then(() => {
      this.props.fetchTasks();
    });
  };

  render() {
    const { classes, handleSubmit, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };

    return (
      <Fragment>
        <Zoom
          in={1 === this.props.selectedBoard}
          timeout={transitionDuration}
          unmountOnExit
          style={{
            transitionDelay: this.props.selectedBoard === 1 ? transitionDuration.exit : 0
          }}
        >
          <Button
            onClick={this.handleClickOpen}
            variant="fab"
            color="primary"
            aria-label="add"
            className={classes.button}
          >
            <AddIcon />
          </Button>
        </Zoom>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <div className={classes.divWrapper}>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <DialogContent>
                {/* TASK NAME */}
                <Field
                  autoFocus
                  name="task_name"
                  label="Tarea"
                  helperText="Nombre de la tarea"
                  fullWidth
                  tfStyle={classes.input}
                  component={renderTextField}
                />
                <div style={{ display: 'flex', justifyContent: 'space-arround' }}>
                  {/* DURATION */}
                  <Field
                    name="duration"
                    label="Duracion"
                    type="number"
                    helperText="Nombre de la tarea"
                    tfStyle={classes.input}
                    component={renderTextField}
                  />
                  {/* PRIORITY */}
                  <Field
                    select
                    name="priority"
                    label="Prioridad"
                    helperText="Priodad de tarea"
                    selectStyle={`${classes.input} ${classes.basis}`}
                    component={renderSelectField}
                  >
                    {priorities.map(priority => (
                      <MenuItem key={priority.type} value={priority.type}>
                        <div style={{ width: '80px' }}>{priority.translate}</div>
                      </MenuItem>
                    ))}
                  </Field>
                </div>
                {/* DESCRIPTION */}
                <Field
                  name="description"
                  label="Descripción"
                  helperText="Historia de usuario"
                  type="text"
                  tfStyle={classes.input}
                  multiline
                  rows="3"
                  fullWidth
                  component={renderTextField}
                />
              </DialogContent>
              <DialogActions>
                <Link to="/tasks">
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" onClick={this.handleClose} color="primary">
                  Crear Tarea
                </Button>
              </DialogActions>
            </form>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

const afterSubmit = (result, dispatch) => dispatch(reset('AddNewTaskForm'));

const mapStateToProps = selectedBoard => {
  return selectedBoard;
};

export default compose(
  withStyles(taskformdialogStyle, { withTheme: true }),
  reduxForm({ validate, form: 'AddNewTaskForm', onSubmitSuccess: afterSubmit }),
  connect(mapStateToProps, actions)
)(TaskFormDialog);
