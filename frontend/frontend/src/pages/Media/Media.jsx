import React, { useState, useEffect } from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import AddMedia from "./AddMedia";
import axios from "axios";

function Media() {
  const [mediaPost, setMediaPost] = useState([]);
  const defaultImageLink = "https://steelsupplements.com/cdn/shop/articles/shutterstock_420286117_1000x.jpg?v=1639391967";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/v1/feed/getAll");
        const data = response.data.map(post => ({
          ...post,
          img: post.img || defaultImageLink
        }));
        setMediaPost(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:5005/api/v1/feed/delete/${postId}`);
      if (response.status === 200) {
        setMediaPost(mediaPost.filter(post => post.id !== postId));
        console.log("Post deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="posts">
      <Stories />
      <AddMedia />
      {mediaPost.map((post) => (
        <div key={post.id}>
          <Post post={post} />
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Media;
