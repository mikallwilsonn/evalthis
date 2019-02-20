// ----
// Dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './theme/theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


// ----
// Components
import App from './components/App';


// ----
// Reducers
import reducers from './reducers';


// ----
// Initializing Redux Store
const store = createStore( reducers, {}, applyMiddleware( reduxThunk ));


// ----
// Rendering the application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector( '#root' )
);
