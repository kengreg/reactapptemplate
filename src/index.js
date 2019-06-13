
//its the same as createElement
import React from 'react';
//reactdom is the same as append to dom
import ReactDOM from 'react-dom';

//import boostrap using npm
//npm install boostrap
import './components/styles/bootstrap.min.css';
import './global.css';
import './components/styles/layout.css';
//this will be for the react Router

import App from './components/App';


const container = document.getElementById('app');

//ReactDOM.render(___what__, ___where____);
//To react render need to give an element , even do its a component you need to put it on brackets
ReactDOM.render(< App />, container);