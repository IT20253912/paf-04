import React, { useState, useEffect } from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import AddMeal from "./AddMeal";
import axios from "axios";

function Meal() {
  const [mealPlans, setMealPlans] = useState([]);
  const defaultImage = "https://formagym.com/wp-content/uploads/2020/01/shutterstock_1069332170.jpg"; // Replace with your default image URL

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/v1/mealplans/getAll");
      setMealPlans(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/api/v1/mealplans/delete/${id}`);
      // Update meal plans after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting meal plan:", error);
    }
  };

  return (
    <div className="posts">
      <Stories />
      <AddMeal />
      {mealPlans.map((post) => (
        <div key={post.id}>
          <Post
            post={{
              ...post,
              img: post.img || defaultImage // Use default image if img property does not exist
            }}
          />
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Meal;
