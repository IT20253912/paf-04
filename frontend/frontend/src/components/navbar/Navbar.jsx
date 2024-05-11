import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "../../css/navbar.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import defaultimg from "../../assests/default.png";
import male from "../../assests/male.png";
import female from "../../assests/female.png";


function Navbar() {
  const [visible, setVisible] = useState(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      localStorage.removeItem("currentUser");
      // You can redirect the user after logout if needed
    } else if (e.key === "account") {
      window.location.href = "/account";
    }
    setVisible(false);
  };

  const getUserImage = () => {
    if (!user || !user.gender) {
      return defaultimg;
    } else if (user.gender === "male") {
      return male;
    } else if (user.gender === "female") {
      return female;
    } else {
      return defaultimg;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="account">Account</Menu.Item>
      <Menu.Item key="logout">Sign out</Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>
            <img className="logo-nav" src="https://w7.pngwing.com/pngs/779/1005/png-transparent-gym-logo.png" alt="" />{" "}
          </span>
        </Link>
        
      </div>
      <div className="right">
        
        <Link to="/feed" className="item">
            <div className="user">  
              <span>Feed</span>
            </div>
          </Link>
          <Link to="/meal" className="user">
            <div className="item">
              
              <span>Meals</span>
            </div>
          </Link>

          <Link to="/workouts" className="user">
            <div className="item">
              
              <span>Workouts</span>
            </div>
          </Link>
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          visible={visible}
          onVisibleChange={(flag) => setVisible(flag)}
        >
          <div className="user" onClick={(e) => e.preventDefault()}>
            <img src={getUserImage()} alt="" />
            {user && <span>{user.name}</span>}
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbar;
