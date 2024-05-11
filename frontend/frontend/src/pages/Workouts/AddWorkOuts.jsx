import React, { useState } from 'react';
import '../../css/AddWorkouts.css'
import Image from '../../assests/addMeal/addImage.png'
import Video from '../../assests/addMeal/addVideo.png'
import Workout from '../../assests/addWorkOut/workout.png'
import { Button, message } from 'antd';


function AddWorkOuts() {
  // State variables to manage input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle post submission
  const handlePost = async () => {
    try {
      const response = await fetch('http://localhost:5005/api/v1/workout/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          userID: null, // Assuming userID is not provided by user input
          description: description,
          likes: 444, // Assuming default likes value
          likedUsers: null,
          comments: null,
          timestamp: null,
        }),
      });

      if (response.ok) {
        message.success('Post created successfully!');
        // Reset input fields after successful post
        setTitle('');
        setDescription('');
      } else {
        message.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      message.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src="https://www.pinpng.com/pngs/m/80-804746_profile-icon-female-user-icon-png-transparent-png.png"
            alt=""
          />
          <input
            type="text"
            className="post-text"
            placeholder={`Write Post Title !!`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="post-text"
            placeholder={`Write Description !!`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: 'none' }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <input type="file" id="file" style={{ display: 'none' }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Video} alt="" />
                <span>Add Video</span>
              </div>
            </label>
            <input type="file" id="file" style={{ display: 'none' }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Workout} alt="" />
                <span>WorkOut Plans</span>
              </div>
            </label>
          </div>
          <div className="right">
            <Button type="primary" onClick={handlePost}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWorkOuts