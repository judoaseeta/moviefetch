import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './state/store';
import App from './containers/AppComponent';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { history } from './state/store';
import { ConnectedRouter as Router } from 'react-router-redux';
ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
