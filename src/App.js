import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
//import './App.css';

function App() {

  const [posts, setPosts] = useState([{userName: "Alex Joosten", postBody: "To be defined."}])

  function addNewPost(post){
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }

  return (
    <div className="App">
      Hello World!
      <CreatePost addNewPost={addNewPost}/>
      <DisplayPosts pagePosts={posts}/>
    </div>
  );
}


export default App;