//Redux Sagas
import {takeEvery, delay, put, all, call} from 'redux-saga/effects';
import {
    imagesLoadedAction,
    userLoadedAction, 
    loadingStartAction, 
    loadingSuccessAction, 
    loadingFailAction
} from './actionCreators';

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
        const randomNum = Math.floor(Math.random() * 10000);
        cachebusters.push(randomNum);
    }
    return yield all(cachebusters.map(cachebuster => call(fetch, `https://picsum.photos/400/400?random=${cachebuster}`)));
}

//Run both the above functions - first fetch the user, then the images. Artificial delay() added to test the
//loading component.
export function* fetchGallery(){
    try {
        yield put(loadingStartAction());
        yield delay(1500);
        const fetchedUser = yield fetchUser();
        const fetchedImgs = yield fetchImages();
        const fetchedImgSources = fetchedImgs.map(img => img.url);
        yield put(userLoadedAction(fetchedUser))
        yield put(imagesLoadedAction(fetchedImgSources));
        yield put(loadingSuccessAction());
    } catch(e){
        yield put(loadingFailAction());
    }
    
}

//Watch saga - uses takeEvery to listen for any FETCH_GALLERY actions (triggered by the button in header).
//When it detects one, it triggers the fetchGallery() function above.
export function* watchLoadGallery(){
    yield takeEvery("FETCH_GALLERY", fetchGallery);
}

