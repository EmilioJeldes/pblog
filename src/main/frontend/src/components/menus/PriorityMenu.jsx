import React, { Component, Fragment } from 'react';
import { withStyles, IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core';

import { ArrowDropDownIcon } from 'components/icons';
import { prioritymenuStyle } from 'assets/jss';
import { tooltipDelay } from 'assets/jss/styleConstants';

class PriorityMenu extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.props.setPriority(event);
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, id } = this.props;
    const { anchorEl } = this.state;

    return (
      <Fragment>
        <Tooltip
          id={`priority-tooltip-${id}`}
          title="Prioridad"
          disableFocusListener
					disableTouchListener
					{...tooltipDelay}
        >
          <IconButton
            className={classes.priorityIcon}
            aria-owns={anchorEl ? `priority-menu-${id}` : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <ArrowDropDownIcon style={{ width: '22px', height: '22px' }} />
          </IconButton>
        </Tooltip>
        <Menu
          id={`priority-menu-${this.props.id}`}
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
          MenuListProps={{
            disablePadding: true
            // classes: {padding: classes.paper }
          }}
        >
          <MenuItem
            component="button"
            onClick={this.handleClose}
            className={classes.menuItemLow}
            value="LOW"
          />
          <MenuItem
            component="button"
            onClick={this.handleClose}
            className={classes.menuItemMedium}
            value="MEDIUM"
          />
          <MenuItem
            component="button"
            onClick={this.handleClose}
            className={classes.menuItemHigh}
            value="HIGH"
          />
          <MenuItem
            component="button"
            onClick={this.handleClose}
            className={classes.menuItemReallyHigh}
            value="REALLY_HIGH"
          />
        </Menu>
      </Fragment>
    );
  }
}

export default withStyles(prioritymenuStyle)(PriorityMenu);
