import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../../redux/actions/actionTodo";
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
            <input value={textInput} onKeyDown={addTask} onChange={changeText} placeholder="Add a new task"/>
        </div>
    )
}
export default Input;