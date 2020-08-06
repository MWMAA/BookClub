import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import AppRouter from './router/AppRouter';
import store from './redux/store';
import './styles/styles.scss';

const configureStore = store()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
