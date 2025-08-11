import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa"

const TodoList = () => {
    const todos = []
    const [newTodo, setNewTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleSubmitBtn = () => {
      if(newTodo.trim() !== ""){
        setTodoList([...todoList, newTodo])
        setNewTodo("")
        console.log(todoList)
      }
    }
    const handleDelete = (del) => {
      const updatedList = todoList.filter((updated, index) => index !== del)
      setTodoList(updatedList)
      alert(`Do you want to delete item ${del}`)
    }

  return (
    <div>
      <div className="todo_list">
        <h1>TODO LIST</h1>
        <div className="create_todo">
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
          <button onClick={handleSubmitBtn}>Create Todo</button>
        </div>
        <div className="todo_content">
          <ul>
            {
              todoList.map((item, num) => (
                <div className='todo-item'>
                  <li key={num}>{item}
                    <FaTrash className='delIcon' onClick={() => handleDelete(num)}/>
                  </li>
                  {/* <button >Delete</button> */}
                </div>
              ))
            }
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default TodoList
