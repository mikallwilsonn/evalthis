// ----
// Dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './theme/theme.css';
import React from 'react';
import ReactDOM from 'react-dom';


// ----
// Components
import App from './components/App';


// ----
// Rendering the application
ReactDOM.render(
    <App />,
    document.querySelector( '#root' )
);
