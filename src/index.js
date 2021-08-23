// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { Provider } from "react-redux"
import { applyMiddleware, compose, createStore } from 'redux';

// my reducer
import rootReducer from './redux/rootReducer';

// redux middleware
import thunk from "redux-thunk"

// my components
import App from './App';

// CREATE STORE
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// WRAP APP WITH PROVIDER
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

//RENDER APP
render(
  app,
  document.getElementById('root')
);
