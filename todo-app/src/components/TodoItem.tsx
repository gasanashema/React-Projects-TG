import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

function TodoItem(props) {
  const [done, setDone] = useState(false);
  const value = props.value;
  const key = props.id;
  const deleteTask = props.deleteTask;

  const handleCheck = (e) =>{
      if(e.target.checked){
        setDone(true);
      }else{
        setDone(false);
      }
  }

  return (
    <li className="flex items-center justify-between py-2 border-b border-b-gray-300" key={key}>
      <div>
        <input type="checkbox" onChange={handleCheck} />
        <span className={`pl-2 ${done == true ? 'line-through' : ''}`}>{value}</span>
      </div>
      <button className="text-sm p-3 bg-gray-100 rounded-full text-red-500 hover:bg-gray-200 cursor-pointer" value={key} onClick={()=>deleteTask(key)}><FaTrash /></button>
    </li>
  )
}

export default TodoItem;