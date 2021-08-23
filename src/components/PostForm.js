// only for temporary vars before their submition
import { useState } from 'react'

// "write" to redux
import { useDispatch } from "react-redux"

// redux actions
import { createPost } from '../redux/actions'

             
const PostForm = () => {
    // takes no props
    //    --> uses redux hooks
    //      --> "writes" to redux    
    const dispatch = useDispatch() 
    

    // initial temp vars
    const [tempState, setTempState] = useState({ title: "" })

    // event handler for button 
    const changeInputHandler = (event) => {
        setTempState((prev) => ({
            ...prev,
            ...{ [event.target.name]: event.target.value }
        }))
    }

    // event handler for form
    const submitHandler = (event) => {
        event.preventDefault()
        const title = tempState.title
        if (!title.trim()) {
            return
        }

        const newPost = {
            title: title, 
            id: Date.now().toString()
        }
        setTempState({ title: "" })
        dispatch(createPost(newPost))        
    }

    return (
        < form onSubmit={submitHandler} >
            <div className="form-group">
                <label htmlFor="title" className="form-label" >Post title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={tempState.title}
                    name="title"
                    onChange={changeInputHandler}
                    placeholder="enter your post title here..."
                />
            </div>
            <button className="btn btn-success" type="submit">create post</button>
        </form >
    )
}

// "mapDispatchToProps" did not work, reason unknown, 
// therefore no errors reported on run

export default PostForm


