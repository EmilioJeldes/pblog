import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';

import {Footer, Header} from '../components';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <CssBaseline/>
            <Header/>
            <Switch>
              {routes.map(
                (prop, index) =>
                  // prop.redirect ? (
                  //   <Redirect from={prop.path} to={"/tasks"} key={index}/>
                  // ) : (
                  //   <Route path={prop.path} component={prop.component} key={index} exact={prop.redirect}/>
                  // )
                  <Route exact={prop.exact} path={prop.path} component={prop.component} key={index}/>
              )}
            </Switch>
            <Footer/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
