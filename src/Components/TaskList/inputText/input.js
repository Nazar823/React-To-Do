import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../../redux/actions/actionTodo";
import "./style.css"
import {addTaskAPI} from "../../../API/TaskAPI/addTaskAPI";

function Input() {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState ('');

    function changeText(event) {
        setTextInput(event.target.value);
    }
    function addTask(e) {
        if (e.key === 'Enter' && (textInput.trimRight().trimLeft() !== "")) {
            const user = localStorage.getItem('user')
            dispatch(addTaskAPI(JSON.parse(user).id, textInput))
            setTextInput('');
        }
    }
    return (
        <div className="inputDiv">
            <input className="input" value={textInput} onKeyDown={addTask} onChange={changeText} placeholder="Enter your task name here"/>
        </div>
    )
}
export default Input;