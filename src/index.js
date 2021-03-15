import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, persistor } from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.querySelector('#root')
)