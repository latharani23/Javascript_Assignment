import React, {useState} from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim()){
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index); 
    setTodoList(newTodoList);
  }
  return(
    <div className = "App">
      <h1> Todo List </h1>
      <form onSubmit = {handleSubmit}>
        <input
        type = "text"
        value = {task}
        onChange ={handleInputChange}
        placeholder ="add a new task......"
        />
        <button type ="submit"> submit </button>
      </form>
      <ul>
        {
        todoList.map((todo, index) => (
          <li key ={index} className = "todo-item">
            {todo}
            <button onClick = {() => handleDelete(index)} className = "delete-btn">Delete </button>
          </li>
        ))}  
      </ul>
    </div>  
  );
}
export default App;
