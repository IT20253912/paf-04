import React, { useState, useEffect } from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import AddMeal from "./AddMeal";
import axios from "axios";

function Meal() {
  // const [mealPlans, setMealPlans] = useState([]);
  // const [apiPosts, setApiPosts] = useState([]);
  // const defaultImageLink = "https://formagym.com/wp-content/uploads/2020/01/shutterstock_1069332170.jpg"; // Replace with your default image URL

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
  const [apiPosts, setApiPosts] = useState([]);
  const [updatePopup, setUpdatePopup] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [postIdToUpdate, setPostIdToUpdate] = useState("");

  const defaultImageLink =
    "https://formagym.com/wp-content/uploads/2020/01/shutterstock_1069332170.jpg";

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/v1/mealplans/getAll");
      const data = await response.json();
      setApiPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:5005/api/v1/mealplans/delete/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setApiPosts(apiPosts.filter((post) => post.id !== postId));
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const openUpdatePopup = (postId, title, description) => {
    setPostIdToUpdate(postId);
    setUpdatedTitle(title);
    setUpdatedDescription(description);
    setUpdatePopup(true);
  };

  const closeUpdatePopup = () => {
    setUpdatePopup(false);
  };

  const updatePost = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5005/api/v1/mealplans/edit/${postIdToUpdate}`,
        {
          title: updatedTitle,
          description: updatedDescription,
        }
      );
      if (response.status === 200) {
        // Refresh posts after successful update
        fetchPosts();
        console.log("Post updated successfully");
        closeUpdatePopup();
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="posts">
      <Stories />
      <AddMeal />
      {/* Render posts from API */}
      {apiPosts.map((post) => (
        <div key={post.id}>
          <Post
            post={{
              id: post.id,
              name: post.title,
              userId: post.userID,
              desc: post.description,
              img: post.img || defaultImageLink,
            }}
          />
          {/* Delete button for each post */}
          <button onClick={() => deletePost(post.id)}>Delete</button>
          {/* Update button for each post */}
          <button
            onClick={() =>
              openUpdatePopup(post.id, post.title, post.description)
            }
          >
            Update
          </button>
        </div>
      ))}

      {/* Update Popup */}
      {updatePopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "#ccc",
            zIndex: "1000",
          }}
        >
          {/* <h2>Update Post</h2> */}
          <textarea
            
            placeholder="New Title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: '10px'
            }}
          />
          <textarea
            placeholder="New Description"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          ></textarea>
          <button
            onClick={updatePost}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Update
          </button>
          <button
            onClick={closeUpdatePopup}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Meal;
