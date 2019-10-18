import React from 'react';
import ReactDOM from 'react-dom';
//import 'font-awesome/css/font-awesome.min.css';//
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import Submit from './Submit';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();