import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './containers/Main';
import LoginFormContainer from "./containers/login/LoginFormContainer";

const componentRoutes = {
    component: Main,
    path: '/',
    indexRoute: { component: LoginFormContainer },
    childRoutes: [
      {
        path: '/login',
        getComponent(location, cb) {
          System.import('./containers/login/LoginFormContainer')
            .then(module => cb(null, module.default));
        }
      },
      {
        path: '/reacttimeline',
        getComponent(location, cb) {
          System.import('./containers/reacttimeline/ReactTimeLineContainer')
            .then(module => cb(null, module.default));
        }
      }
    ]
  };

const Routes = () => {
    return (
      <Router history={hashHistory} routes={componentRoutes} />
    );
  };
  
export default Routes;
