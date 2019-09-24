//Redux Sagas
import {takeEvery, delay, put, all, call} from 'redux-saga/effects';
import {imagesLoadedAction, userLoadedAction, loadingStartAction, loadingEndAction, dispatchErrorAction} from './actionCreators';

//Fetch a random user from the API
function* fetchUser(){
    const fetchedResponse = yield fetch(`https://randomuser.me/api/`);
    const fetchedUser = yield fetchedResponse.json();
    return fetchedUser.results[0];
}

//Fetch a batch of random images from the API. The for loop is just to create 6 random numbers to pass as query args
//on the API URL to avoid caching and ensure each image is unique. Then we map through them and yield a call for
//each of the generated URLs.
function* fetchImages(){
    const cachebusters = [];
    for(let i = 0; i < 6; i++){
        const cachebuster = Math.floor(Math.random() * 10000);
        cachebusters.push(cachebuster);
    }
    return yield all(cachebusters.map(num => call(fetch, `https://picsum.photos/400/400?random=${num}`)));
}

//Run both the above functions - first fetch the user, then the images. Artificial delay() added to test the
//loading component.
export function* fetchGallery(){
    try {
        yield put(loadingStartAction());
        yield delay(2500);
        const newUser = yield fetchUser();
        yield put(userLoadedAction(newUser))
        const newImgs = yield fetchImages();
        const imgSources = newImgs.map(img => img.url);
        yield put(imagesLoadedAction(imgSources));
        yield put(loadingEndAction());
    } catch(e){
        yield put(loadingEndAction());
        yield put(dispatchErrorAction(e));
    }
    
}

//Watch saga - uses takeEvery to listen for any FETCH_GALLERY actions (triggered by the button in header).
//When it detects one, it triggers the fetchGallery() function above.
export function* watchLoadGallery(){
    yield takeEvery("FETCH_GALLERY", fetchGallery);
}

