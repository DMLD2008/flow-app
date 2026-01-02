import React from "react";
import "./Sidebar.css";

const Sidebar = ({ categories, priorityLevels }) => {
  return (
    <div className="sidebar" >
      <p className="sidebar-greeting">Hi, <br /> Demilade</p>
      <hr className="sidebar-divider" />
      <div className="sidebar-section">
        <p>Categories</p>

        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div className="category-card card" key={index}>
              {category}
            </div>
          ))
        ) : (
          <div className="no-categories card">
              <p >No categories yet</p>
          </div>
        )}
      </div>
      <hr className="sidebar-divider" />

      <div className="sidebar-section">
        <p>priority</p>
        {priorityLevels.map((level, index) => (
          <div
            key={index}
            className={`priority-card priority-${level.toLowerCase()} card`}
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
