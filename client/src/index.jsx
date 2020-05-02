import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import data from './dummyData.js'

console.log('Hello world')

ReactDOM.render(<App data={data}/>, document.getElementById('app'));