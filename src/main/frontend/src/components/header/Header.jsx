import React, {PureComponent} from 'react';
import {AppBar, Button, Toolbar, Typography, withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';


import HeadItemContainer from './HeadItemContainer';

import {headerStyle} from '../../assets/jss';

class Header extends PureComponent {
  render() {
    const {classes} = this.props;
    return (
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <HeadItemContainer>
            <Link to={"/"} className={classes.linkColor}>
              <Typography variant="title" color="inherit">
                Pblog
              </Typography>
            </Link>
          </HeadItemContainer>
          <HeadItemContainer auto>
            <Link className={classes.linkColor} to={"/tasks"}><Button color="inherit">Tareas</Button>
            </Link>
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
