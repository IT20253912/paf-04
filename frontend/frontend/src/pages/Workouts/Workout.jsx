import React, { useState, useEffect } from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import "../../css/workouts.css";
import AddWorkOuts from "./AddWorkOuts";
import axios from "axios";

function Workout() {
  // State to store the posts fetched from the API


  // Default image link
  // const defaultImageLink = "https://cdn.mos.cms.futurecdn.net/b46wd2AXdmnJQv3faAwQWU.jpg";

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
  //     const response = await fetch(`http://localhost:5005/api/v1/feed/delete/${postId}`, {
  //       method: "DELETE",
  //     });
  //     if (response.ok) {
       
  //       setApiPosts(apiPosts.filter((post) => post.id !== postId));
  //       console.log("Post deleted successfully");
  //     } else {
  //       console.error("Failed to delete post");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting post:", error);
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
      const response = await fetch("http://localhost:5005/api/v1/workout/getAll");
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
        `http://localhost:5005/api/v1/workout/delete/${postId}`,
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
        `http://localhost:5005/api/v1/workout/edit/${postIdToUpdate}`,
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
      <AddWorkOuts />
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

export default Workout;
