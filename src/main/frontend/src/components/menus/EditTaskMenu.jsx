import React from 'react';
import { IconButton, Tooltip, withStyles } from '@material-ui/core';

import { EditIcon, CloseIcon } from 'components/icons';
import { edittaskmenuStyle } from 'assets/jss';
import { tooltipDelay } from 'assets/jss/styleConstants';

const EditTaskMenu = props => {
  const { id, classes, isEditable } = props;
  return isEditable ? (
    <Tooltip
      id={`tooltip-edit-${id}-not`}
      title="Dejar de editar"
      disableFocusListener
			disableTouchListener
			{...tooltipDelay}
    >
      <IconButton className={classes.optionsIcon}>
        <CloseIcon style={{ width: '16px', height: '16px' }} />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip
      id={`tooltip-edit-${id}`}
      title="Editar título"
      disableFocusListener
      disableTouchListener
      {...tooltipDelay}
    >
      <IconButton className={classes.optionsIcon} onClick={props.editTask}>
        <EditIcon style={{ width: '16px', height: '16px' }} />
      </IconButton>
    </Tooltip>
  );
};

export default withStyles(edittaskmenuStyle)(EditTaskMenu);
