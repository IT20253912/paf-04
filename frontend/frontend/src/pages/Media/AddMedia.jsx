import React, { useState } from "react";
import Image from "../../assests/addMeal/addImage.png";
import Video from "../../assests/addMeal/addVideo.png";
import { Button } from "antd";
import axios from 'axios';
function AddMedia() {
  const [mediaDescription, setMediaDescription] = useState('');
  const [mediaTitle, setmediaTitle] = useState('');
  const [posts, setPosts] = useState([]);

  
  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/v1/feed/create', {
        description: mediaDescription,
        title: mediaTitle
      });
      console.log('Media created:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error creating media:', error);
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7abuuQGsvTyyqVDOGBy-sVIrorOZrB231GWibW_YRNQ&s"
            alt=""
          />
           <input
            type="text"
            value={mediaDescription}
            onChange={(e) => setMediaDescription(e.target.value)}
            className="post-text"
            placeholder="What's on your mind Gayathri ?"
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
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
          </div>
          <div className="right">
          <Button type="primary" onClick={handlePost}>Post</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMedia;
