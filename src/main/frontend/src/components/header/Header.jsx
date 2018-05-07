import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles, Button } from 'material-ui';
import HeadItemContainer from './HeadItemContainer';

import { headerStyle } from 'assets/jss';

class Header extends Component {
  render() {
    const { classes } = this.props;
		console.log(classes);
		console.log(classes.marginAuto);

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
