import { useState } from "react"
import { FaTrash, FaPlus } from "react-icons/fa6";
import TodoItem from "./TodoItem";
function TodoList() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
    
  }

  function addTask(event) {
  event.preventDefault();
    if(newTask.length==0){
     return  alert('A task can not be empty');
    }
     setTask([...tasks,newTask]);
     setNewTask('');
  }

  function deleteTask(index) {
     setTask([...tasks.slice(0,index),...tasks.slice(index+1)])
  }
  return (
    <div className="max-h-screen flex justify-center items-center">
      <div className="h-[600px] w-[600px] flex flex-col items-center">
        <h1 className="text-8xl font-semibold text-gray-300">todos</h1>
        <div className="items-center shadow-md mt-12 py-1 px-4 rounded-full">
          <input type="text" onChange={handleInputChange} placeholder="Add todo..." className="text-black placeholder:text-black w-[400px] outline-none h-full py-1" value={newTask} />
          <button className="bg-green-800 rounded-full text-sm p-1 text-white font-bolder" onClick={addTask}><FaPlus /></button>
        </div>
        <ul className="flex flex-col w-[80%] mt-12">
          {tasks.map((val,ind)=><TodoItem value={val} id={ind} deleteTask={deleteTask}/>)}
        </ul>
      </div>
    </div>
  )
}


export default TodoList