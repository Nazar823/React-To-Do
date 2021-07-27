import Input from "./inputText/input";
import Items from "./itemsList/items";
import Filter from "./filter/Filter";
import {useDispatch, useSelector} from "react-redux";
import "./style.css"

let outArray;

function TaskList() {
    const state = useSelector(state => state.todosReducer)
    const filter = useSelector(state => state.filterReducer)
    switch (filter) {
        case "TRUE":
            outArray = state.filter(task => task.checked)
            break
        case "FALSE":
            outArray = state.filter(task => !task.checked)
            break
        case "ANY":
            outArray = state
            break
        default:
            outArray = state
            break
    }
    return (
        <div className="toDo">
            <Input />
            {
                outArray.map(task => <Items key={task.id} task={task}/>)
            }
            <Filter left={state.filter(task => !task.checked).length}/>
        </div>
    );
}
export default TaskList;
