import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './state/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import * as history from 'history';
const historia = history.createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
      <Router history={historia}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
