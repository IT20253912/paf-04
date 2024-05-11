import React from 'react'
import "../../css/comments.css";

function Comments() {

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="comments">
    <div className="write">
      <img src= "https://cdn-icons-png.flaticon.com/512/5231/5231019.png" alt="" />
      <input type="text" placeholder="write a comment" />
      <button>Send</button>
    </div>
    {comments.map((comment) => (
      <div className="comment">
        <img src={comment.profilePicture} alt="" />
        <div className="info">
          <span>{comment.name}</span>
          <p>{comment.desc}</p>
        </div>
        <span className="date">1 hour ago</span>
      </div>
    ))}
  </div>
  )
}

export default Comments