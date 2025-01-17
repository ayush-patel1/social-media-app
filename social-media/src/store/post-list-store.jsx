import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});


const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter((post) => post.id != action.payload.postId)
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currentPostList]
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
    const addPost = (userId,postTitle,postBody,reactions,tags) => {
        let newAction={
            type:"ADD_POST",
            payload:{
            id:Date.now(),
            title:postTitle,
            body:postBody,
            reactions: reactions,
            userId:userId,
            tags:tags   
            }
        }
        dispatchPostList(newAction);

    }

    const deletePost = (postId) => {
        let newAction = {
            type: 'DELETE_POST',
            payload: {
              postId
            }
        }
        dispatchPostList(newAction);
    }


    return <PostList.Provider value={{ addPost, deletePost, postList }}>
        {children}
    </PostList.Provider>
}
const DEFAULT_POST_LIST = [{
    id: '1',
    title: "Going to Goa for my vacations.",
    body: "Hope I will enjoy!!. Peace out.",
    reactions: 2,
    userId: 'ayush-03',
    tags: ['vacation', 'Mumbai', 'enjoying']
}, {
    id: '2',
    title: "Pass ho gye bhai.",
    body: "4 saal ke masti ke baad bhi ho gye h pass. Hard to beileve",
    reactions: 5,
    userId: 'harsh-03',
    tags: ['graduating', 'unbelievable']
}
]

export default PostListProvider;