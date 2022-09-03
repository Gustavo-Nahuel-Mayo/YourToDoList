import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from './components/TaskForm';



function App() {
  return (
    <main className="h-screen">
      <div className="container mx-auto bg-#33CCFF p-10">
        <TaskForm />
        <TaskList />
      </div>

    </main>
  )
}


export default App;