import React, { PureComponent } from 'react';
import { AppBar, Toolbar, Typography, withStyles, Button } from '@material-ui/core';
import HeadItemContainer from './HeadItemContainer';

import { headerStyle } from 'assets/jss';

class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <HeadItemContainer>
            <Typography variant="title" color="inherit">
              Pblog
            </Typography>
          </HeadItemContainer>
          <HeadItemContainer auto>
            <Button color="inherit">Tareas</Button>
          </HeadItemContainer>
          <HeadItemContainer>
            <Button color="inherit">Login</Button>
          </HeadItemContainer>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyle)(Header);
