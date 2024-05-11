import React, { useState, useEffect } from "react";
import "../../css/rightBar.css";
import axios from "axios";

function RightBar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/users/all");
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Online Friends</span>
          {users.map((user) => (
            <div className="user" key={user.id}>
              <div className={`userInfo ${user.online ? "online" : ""}`}>
                <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <span>{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightBar;
