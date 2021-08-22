import { CREATE_POST, VIEW_ALERT } from "./types";

export const createPost = (payload) => {
    console.log("payload: ", payload, `, action: `, CREATE_POST)
    return {
        type: CREATE_POST,
        payload: payload
    }
}

export const viewAlert = (payload) => {
    console.log("payload: ", payload, `, action: `, VIEW_ALERT)
    return {
        type: VIEW_ALERT,
        payload: payload
    }
}
