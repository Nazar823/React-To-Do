import './App.css';
import React, {useRef, useState} from 'react';

function App() {
    const [tasks, setTask] = useState([]);
    const [value, setValue] = useState('');

    function changeText(event) {
        setValue(event.target.value)
    }

    const changeCheckbox = (id) => {
        setTask(tasks => ([
            ...tasks.map(task => {
                if(task.id === id) {
                    task.checked = !task.checked;
                }
                console.log(task.checked)
                return task;
            })
        ]))
        setValue("")

    }
    // function changeCheck(e) {
    //     setCheckValue(e.target.checked);
    // }
    const addTask = (e) => {
        if (e.key === 'Enter') {
            setTask(tasks => ([
                ...tasks,
                {id: Date.now(), text: value, checked: false}
            ]))
            setValue("")
        }
    }
    // console.log(value)

    return (
        <div className="App">
            <header className="A pp-header">
                <h1>Your todo list</h1>
            </header>
            <div id="tasks_div">
                <input onChange={changeText} onKeyDown={addTask} placeholder='Hello Word!'/>
                {
                    tasks.map(task => (
                        <div key={task.id}>
                            <input type="checkbox" onChange={() => changeCheckbox(task.id)}/>
                            <p>{task.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default App;