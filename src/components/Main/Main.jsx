import React from "react";
import "./Main.css";

const MainSection = ({tasks}) => {
    return (
        <div className="main-section">
            <div className="tasks">
                <h2>Tasks</h2>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                         

                        <div className="task-card card" key={index}>
                            <p className="task-name" id="task-name">{task.name}</p>
                            <div>
                                <p className="task-category">{task.category}</p>
                                <p className={`task-priority ${task.priority.toLowerCase()}`} >{task.priority}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-tasks card">
                        <p>No tasks available</p>
                    </div>
                )}
            </div>
            <span></span>
            <div className="addTasks"></div>
        </div>
    )
}

export default MainSection;
