import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const rootElement = "root";

ReactDOM.render(
    <React.StrictMode>
    </React.StrictMode>, 
    document.getElementById(rootElement)
);

//Registers Service Worker
serviceWorker.register();
