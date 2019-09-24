//Reducer to manage fetching and displaying the user and gallery
//Todo - split this into two for user and images?

//Initial State to build the store with:
const initialState = {
    images: [],
    error: false,
    showGallery: false,
    loading: false,
    appStarted: false,
    user: {
        firstName: "",
        lastName: "",
        avatar: "",
    },
    theme: 'dark'
}


function galleryReducer (state = initialState, action){
    switch(action.type){
        case "IMAGES_LOADED":
            return Object.assign({}, state, {
                images: action.imagesArray
            })
        case "USER_LOADED":
            const user = {
                firstName: action.userObject.name.first,
                lastName: action.userObject.name.last,
                avatar: action.userObject.picture.large
            }
            return Object.assign({}, state, {
                user
            })
        case "LOADING_START":
            console.log("LOADING STARTED");
            return Object.assign({}, state, {
                loading: true,
                showGallery: false,
                error: false,
                appStarted: true
            })
        case "LOADING_FAIL":
            return Object.assign({}, state, {
                error: true,
                showGallery: false,
                loading: false
            })
        case "LOADING_SUCCESS":
            return Object.assign({}, state, {
                loading: false,
                showGallery: true,
            })
        case "TOGGLE_THEME":
            let newTheme;
            if(state.theme === 'dark'){
                newTheme = 'light'
            } else if(state.theme === 'light'){
                newTheme = 'dark'
            } else {
                return state;
            }
            return Object.assign({}, state, {
                theme: newTheme
            })
        default:
            return state;
    }
}

export default galleryReducer;