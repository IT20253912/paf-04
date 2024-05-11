import React, { useState } from "react";
import Image from "../../assests/addMeal/addImage.png";
import Video from "../../assests/addMeal/addVideo.png";
import Meal from "../../assests/addMeal/meal.png";
import { Button } from "antd";
import axios from 'axios';

function AddMeal() {
  const [mealDescription, setMealDescription] = useState('');
  const [mealTitle, setMealTitle] = useState('');

  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/v1/mealplans/create', {
        description: mealDescription,
        title: mealTitle
      });
      console.log('Meal plan created:', response.data);
    } catch (error) {
      console.error('Error creating meal plan:', error);
    }
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append('files', image);
      const response = await axios.post('http://localhost:5005/api/v1/mealplans/upload', formData);
      console.log('Image uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
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
            value={mealDescription}
            onChange={(e) => setMealDescription(e.target.value)}
            className="post-text"
            placeholder="Write & Post Something !!"
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input 
              type="file" 
              id="imageUpload" 
              style={{ display: "none" }} 
              onChange={handleImageUpload} 
            />
            <label htmlFor="imageUpload">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Video} alt="" />
                <span>Add Video</span>
              </div>
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Meal} alt="" />
                <span>Meal Plan</span>
              </div>
            </label>
          </div>
          <div className="right">
            <Button type="primary" onClick={handlePost}>Post</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMeal;
