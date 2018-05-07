import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CssBaseline } from 'material-ui';

import { Header, Footer } from "components";

import routes from 'routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <CssBaseline />
          <Header />
          <Switch>
            {routes.map((prop, index) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.to} key={index} />;
              } else {
                return <Route path={prop.path} component={prop.component} key={index} />;
              }
            })}
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
