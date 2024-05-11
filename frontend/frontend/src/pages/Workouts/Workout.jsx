import React from "react";
import Post from "./post";
import Stories from "../../components/stories/Stories";
import "../../css/workouts.css";
import AddWorkOuts from "./AddWorkOuts";

function Workout() {
  const posts = [
    {
      id: 1,
      name: "Saman Gunawadhane",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidbG_nCyshZ_WDJV7DQwR8PoE0MlojF0s3wm-kBqwY3BJVO4X0AMSQ9yC9deiotazqGc&usqp=CAU",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://cdn.mos.cms.futurecdn.net/b46wd2AXdmnJQv3faAwQWU.jpg",
    },
    {
      id: 2,
      name: "Pethum Saman",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjEiBdH6Mq9Zve-0-TwgKE2rNZxcD7PRaEuLkw_MoUw&s",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/11/Group-Fitness-Class-Performing-A-Variety-Of-Exercises-1.jpg?quality=86&strip=all",
    },
    {
      id: 3,
      name: "kumara Perera",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKO2X_Z6623v8OxwiEkFqzhYnpy4xU66u6XGXQl19qg&s",
      desc: "Use handheld weights or machines. For squats and lunges, keep your weight in your heels or the center of your feet to prevent your knees from extending past your toes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuh9PesOmnoOugJVI99R2a62DfIQkd47Yx8k1q_wyqCQ&s",
    },
    
 
  ];
  return (
    <div className="posts">
      <Stories />
      <AddWorkOuts />
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Workout;
