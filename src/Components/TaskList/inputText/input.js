import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../../redux/actions/actionTodo";
import "./style.css"
import {addTaskAPI} from "../../../API/TaskAPI/addTaskAPI";
import {startLoading} from "../../../redux/actions/actionLogin";

function Input() {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState ('');
    // dispatch(endLoading())

    function changeText(event) {
        setTextInput(event.target.value);
    }
    function addTask(e) {
        if (e.key === 'Enter' && (textInput.trimRight().trimLeft() !== "")) {
            dispatch(addTaskAPI(textInput))
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