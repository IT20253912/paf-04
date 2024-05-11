import React from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import AddMedia from "./AddMedia";
import axios from "axios";
import { useState, useEffect } from "react";

function Media() {

  // const[mediaPost,setMediaPost] =  useState([]);

  const mediaPost = [
    {
      id: 1,
      name: "Saman Kuamara",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLV-abMITCQUBjDPl_gMGKZdQTd5co3orOC-qYlE8_XZ4CUprFSjFg_HorQpahyjpXO3M&usqp=CAU",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://steelsupplements.com/cdn/shop/articles/shutterstock_420286117_1000x.jpg?v=1639391967",
    },
    {
      id: 2,
      name: "Kumara S Perera",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvgs0J-T1J5qggKVSTapcqJWLvCCQVgJs_2LDjwZuEZteeuXP4PlvtsM-Q4eXi2CaUv0&usqp=CAU",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlNOPHrQbOAXxQ0u3sSWxjCCitq0Xy-f5kLm4f0nXaw&s",
    },
  ];


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5005/api/v1/feed/getAll");
  //       setMediaPost(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <div className="posts">
      <Stories />
      <AddMedia />
      {mediaPost.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Media;
