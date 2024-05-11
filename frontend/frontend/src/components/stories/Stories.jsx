import React from "react";
import "../../css/stories.css";
function Stories() {
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Saman Gunawadhana",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTez4ILQ4_PQVUji6tNAgWrSAmVEsB2OwyT6Qxd8CIVCrK5a-1m08twHE4XAIk-1wTi5TE&usqp=CAU",
    },
    {
      id: 2,
      name: "Roshel Peris",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/33a58d63432631.5ab0c1f439624.png",
    },
    {
      id: 3,
      name: "Amal Kamalan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTez4ILQ4_PQVUji6tNAgWrSAmVEsB2OwyT6Qxd8CIVCrK5a-1m08twHE4XAIk-1wTi5TE&usqp=CAU",
    },
    {
      id: 4,
      name: "Sandeep Jaya",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33WA2n2G_QxR71Rtlg0k2jQlW6te9HBsXcCR1C-_VA-2UI5n0c6fZENOtFQs0m-Nb7hY&usqp=CAU",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
          alt=""
        />
        <div className="story-bg">
          <span>Create Story</span>
          <button>+</button>
        </div>
      </div>
      {stories.map((story) => (
        <div className="story-all" key={story.id}>
           <div className="circle-image">
          <img src={story.img} alt="" />
          </div>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
