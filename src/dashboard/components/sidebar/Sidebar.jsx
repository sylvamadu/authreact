import React, { useState } from "react";
import "./Sidebar.css";
import Avatar from "../../../assets/avatar.jpg";
import { Dropdown } from "react-bootstrap";

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="user-avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="user-info">
          <div className="name">Mark Davies</div>
          <div className="mail">
            <span>markdavies@hotmail.com</span>
            <Dropdown>
              <Dropdown.Toggle className="caret" id="dropdown-basic">
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="sidebar-content"></div>
    </div>
  );
}

export default Sidebar;
