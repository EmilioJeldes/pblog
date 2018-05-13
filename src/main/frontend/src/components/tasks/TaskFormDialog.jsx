import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button, Dialog, DialogContent, DialogActions } from 'material-ui';
import MenuItem from 'material-ui/Menu/MenuItem';
import { Field, reduxForm, reset } from 'redux-form';
import compose from 'recompose/compose';
import { connect} from 'react-redux';
import * as actions from 'redux/actions';

import { taskformdialogStyle } from 'assets/jss';
import { AddIcon } from 'components/icons';
import { priorities, validate, renderSelectField, renderTextField } from './constants';

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
    const { classes, handleSubmit } = this.props;

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
          {/* FIXME: white margin over the card task */}
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DialogContent className={`${classes.taskForm}`}>
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
        </Dialog>
      </Fragment>
    );
  }
}

const afterSubmit = (result, dispatch) => dispatch(reset('AddNewTaskForm'));

export default compose(
  withStyles(taskformdialogStyle),
  reduxForm({ validate, form: 'AddNewTaskForm', onSubmitSuccess: afterSubmit }),
  connect(null, actions)
)(TaskFormDialog);
