// "read" from redux
import { useSelector } from "react-redux"

// children-nodes
import Post from './Post'

const Posts = () => {
    //
    // takes no props
    //    --> uses redux hooks
    //      --> "reads" from redux    
    //   

    const syncPosts = useSelector(state => state.posts.posts)
    
    if (!syncPosts.length) {
        return (
            <p className="text-center">[no posts yet]</p>
        )
    }

    return syncPosts.map(post => (
        <Post key={post.id} post={post} />
    ))

}


export default Posts
