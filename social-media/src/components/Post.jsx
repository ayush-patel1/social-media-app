import { AiFillDelete } from "react-icons/ai"
import {useContext} from "react"
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
    //using context to have delete funciton
    const {deletePost}=useContext(PostList);
    return (
        <div className="card post-card" style={{ width: "30rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div classNameName="card-body">
                <h5 className="card-title">{post.title}
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <AiFillDelete onClick={()=>deletePost(post.id)} />
                        <span class="visually-hidden">unread messages</span>
                    </span>

                </h5>
                <p className="card-text">{post.body}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                {post.tags.map((tag) =>
                    (<span key={tag} class="badge text-bg-primary badge">{tag}</span>)
                )}
                <div class="alert alert-success reactions" role="alert">
                    This post has been reacted by {post.reactions} people
                </div>


            </div>
        </div>
    )
}
export default Post;