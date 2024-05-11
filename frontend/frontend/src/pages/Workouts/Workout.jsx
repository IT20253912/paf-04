import React, { useState, useEffect } from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import "../../css/workouts.css";
import AddWorkOuts from "./AddWorkOuts";

function Workout() {
  // State to store the posts fetched from the API
  const [apiPosts, setApiPosts] = useState([]);

  // Default image link
  const defaultImageLink = "https://cdn.mos.cms.futurecdn.net/b46wd2AXdmnJQv3faAwQWU.jpg";

  // Function to fetch posts from the API
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/v1/workout/getAll");
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

  return (
    <div className="posts">
      <Stories />
      <AddWorkOuts />
      {/* Render posts from API */}
      {apiPosts.map((post) => (
        <Post
          key={post.id}
          post={{
            id: post.id,
            name: post.title, // Assuming "title" from API corresponds to "name" in your existing post structure
            userId: post.userID, // Assuming "userID" from API corresponds to "userId" in your existing post structure
            desc: post.description, // Assuming "description" from API corresponds to "desc" in your existing post structure
            img: post.img || defaultImageLink, // Use API image link if available, otherwise use defaultImageLink
            // You can modify or add more mappings based on your API response structure
          }}
        />
      ))}
    </div>
  );
}

export default Workout;
