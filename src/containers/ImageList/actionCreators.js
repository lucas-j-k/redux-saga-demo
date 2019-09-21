export const addImageAction = (payload)=>{
    return {
        type: "ADD_IMAGE",
        payload
    }
}

export const deleteImageAction = (payload)=>{
    return {
        type: "DELETE_IMAGE",
        payload
    }
}

export default addImageAction;