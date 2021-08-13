import {useDispatch} from "react-redux";
import {deleteTodo, getTodo, updateTodo} from "../../../redux/actions/actionTodo";
import style from "./style.css";
import checkIcon from "../../../Pictures/check.svg"
import deleteIcon from "../../../Pictures/deleteBTnew.svg"
import {checkTaskAPI} from "../../../API/TaskAPI/checkTaskAPI"
import {getTasksAPI} from "../../../API/TaskAPI/getTasksAPI";

function Items({task}) {
    const dispatch = useDispatch();
    function check(id) {
        dispatch(checkTaskAPI(id))
        dispatch(getTasksAPI(JSON.parse(localStorage.getItem('user')).id, localStorage.getItem('token')))
        window.location.reload()
    }
    function checkedStyle(element) {
        switch (element) {
            case "div":
                if (task.checked){
                    return "item_div, item_div_checked"
                } else {
                    return "item_div"
                }
            case "img":
                if (!task.checked){
                    return "iconChecked"
                }
        }
    }
    return(
        <div className={checkedStyle("div")}>
            <label>
                <div className="checkBoxDiv">
                    <input className="itemCheckBox" onChange={() => check(task.id)} type="checkbox" defaultChecked={task.checked}/>
                    <img src={checkIcon} className={checkedStyle("img")}/>
                </div>
            </label>
            <p className="itemText">{task.text}</p>
            <label>
                <div className="itemDeleteButton">
                    <button className="fakeBT" onClick={() => dispatch(deleteTodo(task.id))}/>
                    <img src={deleteIcon} className="deleteIcon"/>
                </div>
            </label>
        </div>
    );
}
export default Items;