import { useState } from "react"
import { FaTrash, FaPlus } from "react-icons/fa6";

function TodoList() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    event.preventDefault();
    
  }

  function addTask() {

  }

  function deleteTask(index) {

  }
  return (
    <div className="max-h-screen flex justify-center items-center">
      <div className="h-[600px] w-[600px] flex flex-col items-center">
        <h1 className="text-8xl font-semibold text-gray-300">todos</h1>
        <div className="items-center shadow-md mt-12 py-1 px-4 rounded-full">
          <input type="text" placeholder="Add todo..." className="text-black placeholder:text-black w-[400px] outline-none h-full py-1" />
          <button className="bg-green-800 rounded-full text-sm p-1 text-white font-bolder"><FaPlus /></button>
        </div>
        <ul className="flex flex-col w-[80%] mt-12">

          <TodoItem value="" key=""/>

        </ul>
      </div>
    </div>
  )
}

function TodoItem(props) {
  const [done, setDone] = useState(false);
  const value = props.value;
  const key = props.id;

  const handleCheck = (e) =>{
      if(e.target.checked){
        setDone(true);
      }else{
        setDone(false);
      }
  }

  return (
    <li className="flex items-center justify-between py-2 border-b" key={key}>
      <div>
        <input type="checkbox" onChange={handleCheck} />
        <span className={`pl-2 ${done == true ? 'line-through' : ''}`}>{value}</span>
      </div>
      <button className="text-sm p-3 bg-gray-100 rounded-full text-red-500" value={key}><FaTrash /></button>
    </li>
  )
}
export default TodoList