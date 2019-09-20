import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

/* antd-mobile样式引入 */
// import 'antd-mobile/dist/antd-mobile.css';


import * as serviceWorker from './serviceWorker';
console.log(process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
