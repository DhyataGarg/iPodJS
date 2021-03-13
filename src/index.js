//  In the terminal, write "npm i". This will install all the "node_modules" listed in "package.json" file, that are necessary for this projet.

// Importing all the required stuff.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';


// Rendering our App.jsx which contains all the necessary Components in it
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
