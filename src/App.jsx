import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from './components/Main/Main';


function App() {
  const [categories, setCategories] = useState(["Money", "Important", "Health"]);
  const priorityLevels = ["High", "Medium", "Low"];
  const [tasks, setTasks] = useState([
    {
      name: "work",
      category: "Money",
      priority: "High",
      completed: false
    }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
 

  

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Sidebar categories={categories} priorityLevels={priorityLevels} />
        <MainSection tasks={tasks} addTask={addTask} />
      </div>
    </div>


  )
}

export default App
