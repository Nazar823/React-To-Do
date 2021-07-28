import Input from "./inputText/input";
import Items from "./itemsList/items";
import Filter from "./filter/Filter";
import {useSelector} from "react-redux";
import "./style.css"

let outArray;
let len;
function TaskList() {
    const state = useSelector(state => state.todosReducer)
    const filter = useSelector(state => state.filterReducer)
    len = state.length
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
    let getFilter = ""
    if (state.length > 0) {
        getFilter = <Filter left={state.filter(task => !task.checked).length}/>
    }
    return (
        <div className="toDo">
            <Input />
            {
                outArray.map(task => <Items key={task.id} task={task}/>)
            }
            {getFilter}
        </div>
    );
}
export default TaskList;
