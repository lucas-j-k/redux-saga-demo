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
            console.log("Adding a new image set from reducer -- ", action.payload);
            return Object.assign({}, state, {
                images: action.payload
            })
        case "USER_LOADED":
            const user = {
                firstName: action.payload.name.first,
                lastName: action.payload.name.last,
                avatar: action.payload.picture.large
            }
            console.log("USER PAYLOAD -- ", action.payload);
            console.log("NEW USER OBJECT -- ", user);
            return Object.assign({}, state, {
                user
            })
        case "DELETE_IMAGE":
            console.log("PAYLOAD: ", action.payload);
            const filteredImages = state.images.filter(img=>{
                return img.id !== action.payload;
            });
            return Object.assign({}, state, {
                images: filteredImages
            })
        case "LOADING_START":
            console.log("LOADING STARTED");
            return Object.assign({}, state, {
                loading: true,
                showGallery: false,
                error: false,
                appStarted: true
            })
        case "ERROR":
            console.log("LOADING ERROR OCCURRED");
            return Object.assign({}, state, {
                error: true,
                showGallery: false
            })
        case "LOADING_END":
            console.log("LOADING ENDED");
            return Object.assign({}, state, {
                loading: false,
                showGallery: true,
            })
        case "TOGGLE_THEME":
            console.log("Toggling the UI theme");
            let newTheme;
            if(state.theme === 'dark'){
                newTheme = 'light'
            } else if(state.theme === 'light'){
                newTheme = 'dark'
            }
            return Object.assign({}, state, {
                theme: newTheme
            })
        default:
            return state;
    }
}

export default galleryReducer;