import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {LOG_IN} from "./constants/paths.const";
import LogInPage from "./containers/log-in.page";

export default function Application() {
  const history = createBrowserHistory();

  return <Router history={history}>
    <Switch>
      <Route exact path={LOG_IN}
             render={props => <LogInPage {...props}/>}/>
    </Switch>
  </Router>;
}
