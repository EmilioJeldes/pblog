import React from 'react';
import TextField from '@material-ui/core/TextField'

const setClassPriority = (priority, classes) => {
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
    case 'LOW':
      return classes.topSuccess;
    default:
      return classes.topSuccess;
  }
};

const priorities = [
  { type: 'HIGH', translate: 'Alta' },
  { type: 'REALLY_HIGH', translate: 'Muy Alta' },
  { type: 'MEDIUM', translate: 'Media' },
  { type: 'LOW', translate: 'Baja' }
];

const validate = values => {
  const errors = {};
  const requiredFields = ['task_name', 'duration', 'priority', 'description'];
  requiredFields.forEach(f => {
    if (!values[f]) {
      errors[f] = 'Requerido';
    }
  });
  return errors;
};

const renderTextField = ({
  input,
  helperText,
  tfStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    error={error && touched ? true : false}
    label={label}
    helperText={error && touched ? error : helperText}
    margin="dense"
    className={tfStyle}
    {...input}
    {...custom}
  />
);
const renderSelectField = ({
  input,
  helperText,
  children,
  label,
  selectStyle,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    select
    label={label}
    error={error && touched ? true : false}
    helperText={error && touched ? error : helperText}
    margin="dense"
    className={selectStyle}
    children={children}
    {...input}
    {...custom}
  />
);

export { setClassPriority, priorities, validate, renderSelectField, renderTextField };
