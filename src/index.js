import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';

import './assets/sass/responsive-app-ui-frame.css';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
