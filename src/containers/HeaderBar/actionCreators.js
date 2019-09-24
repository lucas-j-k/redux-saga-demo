export const imagesLoadedAction = (imagesArray)=>{
    return {
        type: "IMAGES_LOADED",
        imagesArray
    }
}

export const fetchGalleryAction = ()=>{
    return {
        type: "FETCH_GALLERY"
    }
}

export const userLoadedAction = (userObject)=>{
    return {
        type: "USER_LOADED",
        userObject
    }
}

export const loadingStartAction = ()=>{
    return {
        type: "LOADING_START"
    }
}

export const loadingSuccessAction = ()=>{
    return {
        type: "LOADING_SUCCESS"
    }
}

export const loadingFailAction = ()=>{
    return {
        type: "LOADING_FAIL"
    }
}

export const toggleThemeAction = ()=>{
    return {
        type: "TOGGLE_THEME",
    }
}

