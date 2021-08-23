import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types";

export const createPost = (payload) => {
    console.log("payload: ", payload, `, action: `, CREATE_POST)
    return {
        type: CREATE_POST,
        payload: payload
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

// jsonplaceholder site that sends mock json data
export const fetchPosts = (payload) => {
    return async (dispatch) => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        setTimeout(() => {
            dispatch({
                type: FETCH_POSTS,
                payload: json
            })
            dispatch(hideLoader())
        }, 2000)
        // dispatch({
        //     type: FETCH_POSTS,
        //     payload: json
        // })
        // dispatch(hideLoader()) 
    }
}


