import { CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./types";

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

export const showAlert = (text) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}

// jsonplaceholder site that sends mock json data
export const fetchPosts = (payload) => {
    return async (dispatch) => {
        try {
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
        } catch (error) {
            dispatch(showAlert(`fetchPosts action error: ${error}`))
            dispatch(hideLoader())
        }

        // dispatch({                       // no-delay variant
        //     type: FETCH_POSTS,
        //     payload: json
        // })
        // dispatch(hideLoader()) 
    }
}


