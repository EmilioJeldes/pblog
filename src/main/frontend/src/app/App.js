import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import { Header, Footer } from 'components';
import routes from 'routes';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <CssBaseline />
            <Header />
            <Switch>
              {routes.map((route, index) => <Route key={index} {...route} />)}
            </Switch>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
