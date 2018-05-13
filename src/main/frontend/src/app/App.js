import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CssBaseline } from 'material-ui';

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
              {routes.map(
                (prop, index) =>
                  prop.redirect ? (
                    <Redirect from={prop.path} to={prop.to} key={index} />
                  ) : (
                    <Route path={prop.path} component={prop.component} key={index} />
                  )
              )}
            </Switch>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
