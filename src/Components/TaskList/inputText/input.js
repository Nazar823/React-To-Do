import {useState} from "react";
function Input(props) {
    const [val, setVal] = useState ('');
    function changeText(event) {
        setVal(event.target.value);
    }
    const addTaskBT = (e) => {
        if (e.key === 'Enter' && (val.trimRight().trimLeft() !=="")) {
            props.addTask(val);
            setVal('');
        }
    }
    return (
        <div>
            <input value={val} onKeyDown={addTaskBT} onChange={changeText} placeholder="Add a new task"/>
        </div>
    )
}
export default Input;