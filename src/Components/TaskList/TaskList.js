import Input from "./inputText/input";
import Items from "./itemsList/items";
import Filter from "./filter/Filter";
import {useState} from "react";
import {logDOM} from "@testing-library/react";

function TaskList() {
    const [tasksArr, setTasks] = useState([
        {id: 0, text: "text sample", checked: false},
        {id: 1, text: "second", checked: true},
        {id: 2, text: "hello world", checked: false}
    ])
    console.log(tasksArr)
     function addTask(text) {
        setTasks([...tasksArr, {id: Date.now(), text: text, checked: false}])
         console.log(tasksArr)
    }
    const checked = [...tasksArr.filter(task => task.checked)]
    const noChecked = [...tasksArr.filter(task =>  !task.checked)]
    let printArr = [];
    function filter(mode) {
        switch (mode) {
            case "ToDo": printArr = noChecked;
            case "Completed": printArr = checked;
            default:  printArr = tasksArr;
        }
    }
    function deleteChecked() {
        setTasks(noChecked);
    }
    function deleteItem(id) {
        setTasks([...tasksArr.filter(task => task.id !== id)])
    }
    function checkItem(id) {
        setTasks(tasksArr.map(task => {
            if (task.id === id){
                task.checked = !task.checked
            }
            return task;
        }))
    }

    return (
        <div>
            <Input addTask={addTask}/>
            {
                tasksArr.map((task) => <Items checkItem={checkItem} deleteItem={deleteItem} task={task}/>)
            }
            <Filter filter={filter} deleteChecked={deleteChecked} left={noChecked.length}/>
        </div>
    );
}
export default TaskList;
