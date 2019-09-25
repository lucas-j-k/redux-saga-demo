import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

//Import base reset global styles
import './reset.css';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import galleryReducer from './containers/HeaderBar/reducers';

//Sagas
import createSagaMiddleware from 'redux-saga';
import {watchLoadGallery} from './containers/HeaderBar/sagas';

//Initialise the saga middleware
const sagaMiddleware = createSagaMiddleware();

//Create the Redux store, passing in our reducer to handle state, and the sagaMiddleware to run all actions through the sagas.:
const store = createStore(galleryReducer, applyMiddleware(sagaMiddleware));

//Pass our saga into the middleware so it runs on actions
sagaMiddleware.run(watchLoadGallery);

//Render the main app, wrapped in the provider so it can access state down through the tree.
//Also wrapped in ThemeProvider so we can access the theme variables in any defined style blocks
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
