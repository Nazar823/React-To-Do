import Input from "./inputText/input";
import Items from "./itemsList/items";
import Filter from "./filter/Filter";
import {useDispatch, useSelector} from "react-redux";
import "./style.css"
import {useEffect} from "react";
import {getTasksAPI} from "../../API/TaskAPI/getTasksAPI";

function TaskList() {
    let dispatch = useDispatch()
    useEffect(()=>{
            dispatch(getTasksAPI())
    }, [])
    const {todos} = useSelector(state => state.todosReducer)
    const filter = useSelector(state => state.filterReducer)
    let outArray = [];
    switch (filter) {
        case "TRUE":
            outArray = todos.filter(task => task.checked)
            break
        case "FALSE":
            outArray = todos.filter(task => !task.checked)
            break
        case "ANY":
            outArray = todos
            break
        default:
            outArray = todos
            break
    }
    let getFilter = ""
    if (todos.length > 0) {
        getFilter = <Filter left={todos.filter(task => !task.checked).length}/>
    }
    return (
        <div className="toDo">
            <Input/>
            {
                outArray.map(task => <Items key={task.id} task={task}/>)
            }
            {getFilter}
        </div>
    );
}
export default TaskList;
