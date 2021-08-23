// redux combiner
import { combineReducers } from "redux";

// used reducers
import appReducer from "./appReducer";
import postsReducer from "./postsReducer";

// combined reducer
const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})

export default rootReducer



