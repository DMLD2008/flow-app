import React from "react";
import "./Main.css";
import { useState } from "react";

const MainSection = ({tasks, addTask, deleteTask }) => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("Low");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const newTask = {
        name,
        category,
        priority,
        completed: false,
    };

    addTask(newTask);

    setName("");
    setCategory("");
    setPriority("Low");
    };


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
                                <img src="src/assets/trashcan.svg"  onClick={(e) => {
                                    e.stopPropagation(); 
                                    deleteTask(index);
                                }}/>
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
            <div className="addTasks">
                <h2>Add New Task</h2>
                <form className="addTask-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Task Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <select name="priority" id="priority-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="">Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default MainSection;
