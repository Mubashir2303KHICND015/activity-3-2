import { useState } from 'react';
import classes from './BlogPosts.module.css';
import { useEffect } from 'react';
import axios from "axios";
import NewPost from './NewPost';

function BlogPosts() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/posts")
   .then(response=>setPosts(response.data))
   .catch(e=>console.log(e))
  },[])

  const updateList=(newList)=>{
    setPosts(newList)
  }

  return (
    <>
  <NewPost updateList={updateList} posts ={posts} ></NewPost>
  <ul classes={classes.list}>
    {posts.map(post=>(<div>
    <li key={post.id}>
      {post.title}
    </li>
  </div>))}</ul>
  </>
  )
 
}

export default BlogPosts;
