import {useRef,useContext} from "react";
import PostListProvider, { PostList } from "../store/post-list-store";
const CreatePost = () => {
    const {addPost}=useContext(PostList)
    const userIdElement=useRef();
    const postTitleElement=useRef();
    const postBodyElement=useRef();
    const reactionsElement=useRef();
    const tagsElement=useRef();    

const handleSubmit=(event)=>{
   event.preventDefault();
   const userId=userIdElement.current.value;
   const postTitle=postTitleElement.current.value;
   const postBody=postBodyElement.current.value;
   const reactions=reactionsElement.current.value;
   const tags=tagsElement.current.value.split(" ");

   userIdElement.current.value="";
   postTitleElement.current.value="";
   postBodyElement.current.value="";
   reactionsElement.current.value="";
   tagsElement.current.value=" ";

   addPost(userId,postTitle,postBody,reactions,tags)

}
    return (
        <form className="create-post" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label htmlFor="userId" class="form-label">Enter your User ID here</label>
                < input type="text" ref={userIdElement}class="form-control" id="userId" placeholder="Your User Id" />
            </div>

            <div class="mb-3">
                <label htmlFor="title" class="form-label">Post Title</label>
                <input type="text" ref={postTitleElement} class="form-control" id="title" placeholder="How are you feeling today.." />
            </div>

            <div class="mb-3">
                <label htmlFor="body" class="form-label">Post Content</label>
                <textarea rows="4" ref={postBodyElement } type="text" class="form-control" id="body" placeholder="Tell us more about it.." />
            </div>

            <div class="mb-3">
                <label htmlFor="reations" class="form-label">Number of reactions</label>
                <input rows="4"type="text" ref={reactionsElement} class="form-control" id="reactions" placeholder="How many people reaacted to this post" />
            </div>
            <div class="mb-3">
                <label htmlFor="tags" class="form-label">Enter your hastags here</label>
                <input rows="4"type="text" ref={tagsElement} class="form-control" id="tags" placeholder="Enter your tags using space" />
            </div>
          
          
         
            <button type="submit" class="btn btn-primary">Post</button>
        </form>
    )
}
export default CreatePost;