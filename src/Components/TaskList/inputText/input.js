import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../../redux/actions/actionTodo";
import "./style.css"

function Input() {
    const dispatch = useDispatch();
    const [textInput, settextInput] = useState ('');

    function changeText(event) {
        settextInput(event.target.value);
    }
    function addTask(e) {
        if (e.key === 'Enter' && (textInput.trimRight().trimLeft() !=="")) {
            dispatch(addTodo({id: Date.now(), text: textInput, checked: false}))
            settextInput('');
        }

    }
    return (
        <div>
            <input className="input" value={textInput} onKeyDown={addTask} onChange={changeText} placeholder="Enter your task name here"/>
        </div>
    )
}
export default Input;