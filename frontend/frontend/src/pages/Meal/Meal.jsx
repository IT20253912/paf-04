import React, { useState, useEffect } from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import AddMeal from "./AddMeal";
import axios from "axios";

function Meal() {
  const [mealPlans, setMealPlans] = useState([]);
  const [apiPosts, setApiPosts] = useState([]);
  const defaultImageLink = "https://formagym.com/wp-content/uploads/2020/01/shutterstock_1069332170.jpg"; // Replace with your default image URL

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5005/api/v1/mealplans/getAll");
  //     setMealPlans(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5005/api/v1/mealplans/delete/${id}`);
      
  //     fetchData();
  //   } catch (error) {
  //     console.error("Error deleting meal plan:", error);
  //   }
  // };
const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/v1/mealplans/getAll");
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
      const response = await fetch(`http://localhost:5005/api/v1/mealplans/delete/${postId}`, {
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
      <AddMeal />
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

export default Meal;
