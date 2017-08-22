import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';

import { store, muiTheme } from './store';
import Routes from './routes';
//const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Routes />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('app'));
