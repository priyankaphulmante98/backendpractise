import { Routes, Route } from 'react-router-dom';
import './App.css';
import Edit from './Components/Edit';
import Register from './Components/Register';
import SingleTask from './Components/SingleTask';
import Task from './Components/Task';

function App() {
  return (
    <div className="App">
  <Routes>
   <Route path="/" element={<Task/>} />
   <Route path="/edit/:id" element={<Edit/>} />
   <Route path="/register" element={<Register/>}/>
   <Route path="/singletask/:id" element={<SingleTask/>} />

  </Routes>
     
    </div>
  );
}

export default App;
