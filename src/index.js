/* 
DEfault configuration

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


*/


// const element = document.createElement("h1");
// element.innerText = 'hello, world';

// const container = document.getElementById('app');

// container.appendChild(element);

//its the same as createElement
import React from 'react';
//reactdom is the same as append to dom
import ReactDOM from 'react-dom';

//import boostrap using npm
//npm install boostrap
import './components/styles/bootstrap.min.css';
import './global.css';
//getting the component created by me
import Badge from "./components/Badge";

// const jsx = <h1>Hello again in react</h1>;
/*** const element = React.createElement('tag', {atributo}, 'contenido del tag'); ***/
// const element = React.createElement('a', {href: 'https://www.google.com'}, 'esto es un link');
// const name = 'ken';
// const element = React.createElement('h1',{}, `hello again this is a ${name}`)
// const sum = () => 3 + 3;
// const jsx = <h1>helo, this is the {name} {2 + 2} {sum()}</h1>;
// const jsx = (<div>
//     <h1>fsdfsdfsdfsd </h1>
//     <p>estoy jugando con una app</p>
// </div>);

const container = document.getElementById('app');

//ReactDOM.render(___what__, ___where____);
//To react render need to give an element , even do its a component you need to put it on brackets
ReactDOM.render(< Badge />, container);