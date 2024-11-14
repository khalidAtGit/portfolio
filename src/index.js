import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.js';
import { NavbarContextProvider } from './context/navbar-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <NavbarContextProvider>
            <App />
        </NavbarContextProvider>
    </React.StrictMode>
);
