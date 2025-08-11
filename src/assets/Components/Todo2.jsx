import React from 'react'
import { useState } from "react"

const Todo2 = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [isEditing, setisEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleTodo = () => {
        if(input.trim() === "") return;

        if(isEditing){
            const updatedTodos = [...todos];
            updatedTodos[editIndex] = input;
            setTodos(updatedTodos)
            setisEditing(false);
            setEditIndex(null);
        } else{
            setTodos([...todos, input]);
        }
        setInput("")
    };

    const handleEditTodo = (index) =>{
        setisEditing(true);
        setEditIndex(index);
        setInput(todos[index]);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos =  todos.filter((_, i) => i != index);
        setTodos(updatedTodos);
        if(isEditing && index === editIndex){
            setisEditing(false);
            setInput("");
            setEditIndex(null);
        }
    }
  return (
    <div className='p-4 mx-auto max-w-md'>
      <h1>Todo List</h1>
      <div>
        <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter Todo...'
            className='border rounded px-2 w-full'
        />
        <button onClick={handleTodo}>
            {isEditing ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => {
            <li key={index}>
                <span>{todo}</span>
                <div>
                    <button 
                        onClick={() => handleEditTodo(index)}>
                            Edit
                    </button>
                    <button 
                        onClick={() => {handleDeleteTodo(index)}}>
                            Delete
                    </button>
                </div>
            </li>
        })}
      </ul>
    </div>
  )
}

export default Todo2
