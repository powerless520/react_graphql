import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const hText = <h1>Hello React</h1>

const name = 'John Perez';
const element = <h1>Goods {name}</h1>

const
root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>Hello World!</h1>
        <div>{element}</div>
        <App/>
    </div>
);

reportWebVitals()
