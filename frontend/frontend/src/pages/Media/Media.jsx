import React, { useState, useEffect } from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import AddMedia from "./AddMedia";
import axios from "axios";

function Media() {
  const [mediaPost, setMediaPost] = useState([]);
  const [apiPosts, setApiPosts] = useState([]);
  const defaultImageLink = "https://steelsupplements.com/cdn/shop/articles/shutterstock_420286117_1000x.jpg?v=1639391967";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5005/api/v1/feed/getAll");
  //       const data = response.data.map(post => ({
  //         ...post,
  //         img: post.img || defaultImageLink
  //       }));
  //       setMediaPost(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Function to fetch posts from the API
  // const fetchPosts = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5005/api/v1/workout/getAll");
  //     const data = await response.json();
  //     setApiPosts(data);
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //   }
  // };

 
  // useEffect(() => {
  //   fetchPosts();
  // }, []);


  // const deletePost = async (postId) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:5005/api/v1/feed/delete/${postId}`);
  //     if (response.status === 200) {
  //       setMediaPost(mediaPost.filter(post => post.id !== postId));
  //       console.log("Post deleted successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting post:", error);
  //   }
  // };

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/v1/feed/getAll");
      const data = await response.json();
      setApiPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to delete a post by ID
  const deletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5005/api/v1/feed/delete/${postId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the deleted post from the state
        setApiPosts(apiPosts.filter((post) => post.id !== postId));
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="posts">
      <Stories />
      <AddMedia />
      {/* Render posts from API */}
      {apiPosts.map((post) => (
        <div key={post.id}>
          <Post
            post={{
              id: post.id,
              name: post.title, // Assuming "title" from API corresponds to "name" in your existing post structure
              userId: post.userID, // Assuming "userID" from API corresponds to "userId" in your existing post structure
              desc: post.description, // Assuming "description" from API corresponds to "desc" in your existing post structure
              img: post.img || defaultImageLink, // Use API image link if available, otherwise use defaultImageLink
              // You can modify or add more mappings based on your API response structure
            }}
          />
          {/* Delete button for each post */}
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Media;
