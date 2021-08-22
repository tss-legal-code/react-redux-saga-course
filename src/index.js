import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { Provider } from "react-redux"
import { compose, createStore } from 'redux';
import rootReducer from './redux/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  )

const app = (
  <Provider store={store}> 
    <App />
  </Provider>
)
render(
  app,
  document.getElementById('root')
);
