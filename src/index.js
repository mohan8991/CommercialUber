import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//TODO: Components for User Signup form
//TODO: Singin form
/* TODO:Routing, proximity, Current location        */
//TODO: Change the header to a search bar
//TODO: To handle URL based redirection

serviceWorker.unregister();
