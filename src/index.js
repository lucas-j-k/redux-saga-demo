import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Placeholder data for initial state
import dummyImages from './dummy-data';

//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//Initialise the Redux Store

//Initial State to build the store with:
const initialState = {
    images: dummyImages
}

//Basic reducer:
function reducer (state = initialState, action){
    switch(action.type){
        case "ADD_IMAGE":
            console.log("Adding a new image from reducer");
            return Object.assign({}, state, {
                images: [...state.images, action.payload]
            })
        case "DELETE_IMAGE":
            console.log("PAYLOAD: ", action.payload);
            const filteredImages = state.images.filter(img=>{
                return img.id !== action.payload;
            });
            return Object.assign({}, state, {
                images: filteredImages
            })
        default:
            return state;
    }
}

//Create the store, passing in our reducer to handle state:
const store = createStore(reducer)

//Render the main app, wrapped in the provider so it can access state down through the tree.

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
