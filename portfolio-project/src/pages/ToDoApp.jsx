import React, {useState} from 'react'

function ToDoApp(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        if(task.trim()){
            setTasks([...tasks, task]);
            setTask('');
            console.log('task added');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
    return(
        <div>
            <h3>To Do List App</h3>
            <div className="list-input">
                <input type='text' value = {task} onChange={handleInputChange} placeholder='Add a new task'></input>
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <TodoItem key = {index} task={task} onDelete={() => deleteTask(index)} />
                ))}
            </ul>
        </div>
    );
}

function TodoItem({task, onDelete}) {
    return(
        <li className="todo-item">
            {task}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default ToDoApp;