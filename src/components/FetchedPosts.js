// "write" to redux
import { useDispatch, useSelector } from "react-redux"

// redux actions
import { fetchPosts } from "../redux/actions"

// children-nodes
import Post from './Post'



const FetchedPosts = () => {
    // takes no props
    //    --> uses redux hooks
    //      --> async "writes" to redux from Internet
    //      --> "reads" from redux

    const dispatch = useDispatch()

    const fetchedPosts = useSelector(state => state.posts.fetchedPosts)

    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return (
            <div className="text-center">
                <p>Loading... <em>(to dispaly this component a 2 sec timeout added)</em></p>
                <div className="text-center spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
    // 01:05:07
    // ???????????????????????????????????????????????????

    if (!fetchedPosts.length) {
        return (
            <>


                <p className="text-center">[no posts yet]</p>
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch(fetchPosts())}> Download posts</button>
            </>
        )
    }

    return fetchedPosts.map(post => (
        <Post key={post.id} post={post} />
    ))
}

export default FetchedPosts

