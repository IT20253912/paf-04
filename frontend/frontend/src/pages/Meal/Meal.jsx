import React from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import AddMeal from "./AddMeal";
import axios from "axios";
import { useState, useEffect } from "react";

function Meal() {
  // const [mealPlans, setMealPlans] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5005/api/v1/mealplans/getAll");
  //       setMealPlans(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const mealPlans = [
    {
      id: 1,
      name: "Lily Max",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCpT0oNChn1O7paEyca2cgM3Wb42G5FJduiPSZt3yAg&s",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://formagym.com/wp-content/uploads/2020/01/shutterstock_1069332170.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCpT0oNChn1O7paEyca2cgM3Wb42G5FJduiPSZt3yAg&s",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZKwRLmFE37EoXxtOEXa_Kf2QgyhH89w5f167UkoQUQ&s",
    },
    {
      id: 3,
      name: "Lily Max",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCpT0oNChn1O7paEyca2cgM3Wb42G5FJduiPSZt3yAg&s",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKIRUJ-cODf78ks0jSf8Awc7XVj-p0XxJ0E1WgA654G--AG-G5QKkWJTpCSFxMKaj65o&usqp=CAU",
    },
  ];

  return (
    <div className="posts">
      <Stories />
      <AddMeal />
      {mealPlans.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Meal;
