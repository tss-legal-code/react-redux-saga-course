// just takes props and displays them
// --> endpoint

const Posts = ({ post }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <h2>Title here {post.title}</h2>
            </div>
        </div>
        </div >
    )
}

export default Posts
