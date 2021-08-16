import Input from "./inputText/input";
import Items from "./itemsList/items";
import Filter from "./filter/Filter";
import {useDispatch, useSelector} from "react-redux";
import "./style.css"
import {useEffect} from "react";
import {getTasksAPI} from "../../API/TaskAPI/getTasksAPI";

let outArray;
let len;
function TaskList() {
    let dispatch = useDispatch()
    useEffect(()=>{
        if (localStorage.getItem('token')) {
            dispatch(getTasksAPI())
        }
    })
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
        getFilter = <Filter left={lenOfArr}/>
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
