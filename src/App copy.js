import './App.css';
import React, {useState} from 'react';
let items;
items = JSON.parse(localStorage.getItem("items"));

function App() {
    const [tasks, setTask] = useState(items);
    const [value, setValue] = useState('');

    function changeText(event) {
        setValue(event.target.value)
    }
    const addTask = (e) => {
        if (e.key === 'Enter' && (value.trimRight().trimLeft() !=="")) {
            setTask([...tasks, {id: Date.now(), text: value, checked: false}])
            localStorage.setItem("items", JSON.stringify([...tasks, {id: Date.now(), text: value, checked: false}]));
            setValue('')
        }
    }
    function deleteChecked() {
        let arr = tasks;
        localStorage.setItem("items", JSON.stringify([...arr.filter(item => !item.checked)]));
        setTask(arr.filter(item => !item.checked));
    }

    function filterList(mode) {
        setTask(JSON.parse(localStorage.getItem("items")))
        if (mode === "Completed"){
            setTask(JSON.parse(localStorage.getItem("items")).filter(item => item.checked))
        }
        if (mode === "ToDo"){
            setTask(JSON.parse(localStorage.getItem("items")).filter(item => !item.checked))
        }
    }

    return (
        <div className="App">
            <header className="A pp-header">
                <h1>Your todo list</h1>
            </header>
            <div id="tasks_div">
                <input onChange={changeText} onKeyDown={addTask} placeholder='Add a new task'/>
                {
                    taskList(tasks)
                }
                <p>{tasks.length} tasks left</p>
                <button className="deleteCheckedBT" onClick={() => deleteChecked()} >Delete checked</button>
                <br/><br/>
                <button onClick={() => filterList("All")}>All</button>
                <button onClick={() => filterList("ToDo")}>ToDo</button>
                <button onClick={() => filterList("Completed")}>Completed</button>
            </div>
        </div>
    );
};

function taskList(taskArray) {
    // const [taskArray, setTask] = useState(items);
    const changeCheckbox = (id) => {
        let arr = taskArray.map((task) => {
            if(task.id === id) {
                task.checked = !task.checked;
            }
            return task;
        })
        localStorage.setItem("items", JSON.stringify(arr));
        App().setTask(arr);
    }
    function deleteItem(id) {
        let arr = taskArray;
        localStorage.setItem("items", JSON.stringify([...arr.filter(item => item.id !== id)]));
        return(arr.filter(item => item.id !== id));
    }

    return(taskArray.map(task => (
        <div key={task.id} className="item_div">
            <input checked={task.checked}
                   type="checkbox"
                   onChange={() => changeCheckbox(task.id)}
            />
            <p>{task.text}</p>
            <button className="deleteBT"
                    onClick={() => deleteItem(task.id)}
            >Delete</button>
        </div>
    )));
}

export default App;