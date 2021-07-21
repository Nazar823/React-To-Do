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
    }

    return (
        <div>
            <Input/>
            {/*TEST BUTTON*/}
                <button onClick={() => addTask("SAMPLE")}>SampleADD</button>
            {/*TEST BUTTON*/}
            {
                tasksArr.map((task) => <Items task={task}/>)
            }
            <Filter left={tasksArr.length}/>
        </div>
    );
}
export default TaskList;
