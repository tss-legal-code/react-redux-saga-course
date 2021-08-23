import { CREATE_POST, FETCH_POSTS } from "./types"

const initialState = {
    posts: [
        {
            title: "1",
            id: "1"
        },
        { 
            title: "2", 
            id: "2" 
        },
        { 
            title: "4", 
            id: "4" 
        }
    ],
    fetchedPosts: [],
}

const postsReducer = (state = initialState, action) => {
    console.log(`current state is state`, state)
    console.log(`case CREATE_POST equals:`, CREATE_POST)
    console.log(`current action is`, action)
    switch (action.type) {
        case CREATE_POST:
            // console.log("working with action: ", CREATE_POST )
            return { ...state, posts: state.posts.concat(...[action.payload]) }
            // return {...state, posts: [...state.posts, [action.payload]]} // alternative notation
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        default:
            console.log("working with action: DEFAULT")
            return state
    }
}

export default postsReducer
