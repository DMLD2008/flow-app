import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from './components/Main/Main';
import { useEffect } from 'react';




function App() {
  const [categories, setCategories] = useState(() => {
  const savedCategories = localStorage.getItem("categories");
  return savedCategories ? JSON.parse(savedCategories) : [];
});
  const priorityLevels = ["High", "Medium", "Low"];
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");

  const filteredTasks = tasks.filter((task) => {
  const categoryMatch =
    selectedCategory === "all" ||
    task.category === selectedCategory;

  const priorityMatch =
    selectedPriority === "all" ||
    task.priority === selectedPriority;

  return categoryMatch && priorityMatch;
});


  const normalizeCategory = (category) => {
  return category.trim().toLowerCase();
};


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
  localStorage.setItem("categories", JSON.stringify(categories));
}, [categories]);

  const addTask = (task) => {
    task.category = normalizeCategory(task.category);
    setTasks([...tasks, task]);

    if (task.category && !categories.includes(task.category)) {
      setCategories([...categories, task.category]);
    }
  }

  const deleteTask = (index) => {
    const taskToDelete = tasks[index]; 
  const updatedTasks = tasks.filter((_, i) => i !== index);

  setTasks(updatedTasks);

  const categoryStillExists = updatedTasks.some(
    (task) => task.category === taskToDelete.category
  );

  if (!categoryStillExists) {
    setCategories((prevCategories) =>
      prevCategories.filter((cat) => cat !== taskToDelete.category)
    );
  }
  }
 

  

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Sidebar categories={categories} priorityLevels={priorityLevels} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedPriority={selectedPriority} setSelectedPriority={setSelectedPriority}/>
        <MainSection tasks={filteredTasks} addTask={addTask} deleteTask={deleteTask} categories={categories}/>
      </div>
    </div>


  )
}

export default App
