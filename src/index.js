import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import undoable from 'redux-undo';
import reducer from './reducers/reducer'

import AppContainer from './containers/AppContainer';

let store = createStore(
  combineReducers({reducer: undoable(reducer)})
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
