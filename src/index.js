import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import bootstrap
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "react-confirm-alert/src/react-confirm-alert.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

