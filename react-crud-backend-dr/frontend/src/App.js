import { Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit";
import Register from "./Pages/Register";
import SingleTask from "./Pages/SingleTask";
import Task from "./Pages/Task";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/singletask/:id" element={<SingleTask />} />
      </Routes>
    </div>
  );
}

export default App;
