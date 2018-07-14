import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyAf5ja8pZl3_LY6UqoNM3OF0UHdT6RJ0zM",
    authDomain: "readersleague-21e03.firebaseapp.com",
    databaseURL: "https://readersleague-21e03.firebaseio.com",
    projectId: "readersleague-21e03",
    storageBucket: "readersleague-21e03.appspot.com",
    messagingSenderId: "519989270169"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
