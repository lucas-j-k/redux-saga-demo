export const imagesLoadedAction = (payload)=>{
    return {
        type: "IMAGES_LOADED",
        payload
    }
}


export const fetchGalleryAction = ()=>{
    return {
        type: "FETCH_GALLERY"
    }
}

export const userLoadedAction = (payload)=>{
    return {
        type: "USER_LOADED",
        payload
    }
}

export const loadingStartAction = ()=>{
    return {
        type: "LOADING_START"
    }
}

export const loadingEndAction = ()=>{
    return {
        type: "LOADING_END"
    }
}

export const dispatchErrorAction = (error)=>{
    return {
        type: "ERROR",
        payload: error
    }
}

export const toggleThemeAction = ()=>{
    return {
        type: "TOGGLE_THEME",
    }
}


// export default fetchGalleryAction;