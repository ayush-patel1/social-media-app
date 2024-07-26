import { createContext, useReducer } from "react";

export const PostList=createContext({postList:[],
    addPost:()=>{},
    deletePost:()=>{}});


const postListReducer=(currentPostList,action)=>{
    return currentPostList;
}

const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
    const addPost=()=>{

    }

    const deletePost=()=>{

    }

   return <PostList.Provider value={{addPost,deletePost,postList}}>
        {children}
    </PostList.Provider>
}
const DEFAULT_POST_LIST=[{
   id:'1',
   title:"Going to Goa for my vacations.",
   body:"Hope I will enjoy!!. Peace out.",
   reactions:2,
   userId:'ayush-03',
   tags:['vacation','Mumbai','enjoying']
},{
    id:'21',
    title:"Pass ho gye bhai.",
    body:"4 saal ke masti ke baad bhi ho gye h pass. Hard to beileve",
    reactions:5,
    userId:'harsh-03',
    tags:['graduating','unbelievable']
 }
]

export default PostListProvider;