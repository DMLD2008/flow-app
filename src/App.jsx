import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from './components/Main/Main';


function App() {
  let categories = ["Money", "Important", "Health"];
  const priorityLevels = ["High", "Medium", "Low"];
  let tasks = [
    {
      name: "work",
      category: "Money",
      priority: "High",
      completed: false
    }
  ];
 

  

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Sidebar categories={categories} priorityLevels={priorityLevels} />
        <MainSection tasks={tasks} />
      </div>
    </div>


  )
}

export default App
