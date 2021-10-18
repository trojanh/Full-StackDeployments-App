import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import deploymentReducer from './reducers/deploymentReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(deploymentReducer)


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
