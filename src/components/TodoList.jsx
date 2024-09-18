import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        } else {
            alert("You can't add empty task")
        }
    }

    function deleteTask(index) {
        if(confirm("Are you sure you want to delete this task?")) {
            const updatedTasks = tasks.filter((_task, i) => i !== index)

            setTasks(updatedTasks)
        }
    }

    function moveTaskUp(index) {
        const updatedTasks = [...tasks]

        if(index > 0) {
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]

            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        const updatedTasks = [...tasks]

        if(index < tasks.length - 1) {
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]

            setTasks(updatedTasks)
        }
    }

    return (
        <div className="todoList">
            <h1 className="todo-headline">To-Do Lists</h1>

            <div>
                <input 
                    className="taskInput"
                    type="text"
                    placeholder="Enter a task"
                    value={ newTask }
                    onChange={ handleInputChange }
                />
                <button onClick={ addTask } className="btn addBtn">Add</button>
            </div>

            <div className="taskContainer">
                <ol className="taskOrderList">
                    {
                        tasks.map((task, index) => (
                            <li className="taskLists" key={ index }>
                                <span className="taskText">{ task }</span>
                                <button className="btn deleteBtn" onClick={ () => deleteTask(index) }>Delete</button>         
                                <button className="btn moveBtn" onClick={ () => moveTaskUp(index) }>☝</button>
                                <button className="btn moveBtn" onClick={ () => moveTaskDown(index) }>👇</button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default TodoList