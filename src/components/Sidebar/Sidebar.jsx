import React from "react";
import "./Sidebar.css";

const Sidebar = ({ categories, priorityLevels, setSelectedCategory, setSelectedPriority }) => {
  return (
    <div className="sidebar" >
      <p className="sidebar-greeting">Hi, <br /> User</p>
      <hr className="sidebar-divider" />
      <div className="sidebar-section">
        <p>Categories</p>
        <div className="card" onClick={() => setSelectedCategory("all")}>All</div>
        
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div className="category-card card" key={index} onClick={() => setSelectedCategory(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
        <div className="card" onClick={setSelectedPriority("all")}>All</div>
        {priorityLevels.map((level, index) => (
          <div
            key={index}
            className={`priority-card priority-${level.toLowerCase()} card`}
            onClick={() => setSelectedPriority(level.toLowerCase())}
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
