import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './containers/Main';
import LoginForm from "./containers/login/LoginForm";

// export default (
//   <div>
//       <Route path="/" component={Main} history={hashHistory}>
//           <IndexRoute component={LoginForm} />
//           <Route path="/login" component={LoginForm} />
//       </Route>
//   </div>
//)

const componentRoutes = {
    component: Main,
    path: '/',
    indexRoute: { component: LoginForm },
    childRoutes: [
      {
        path: '/login',
        getComponent(location, cb) {
          System.import('./containers/login/LoginForm')
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
