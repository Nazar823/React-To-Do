import {useDispatch} from "react-redux";
import {checkTodo, deleteTodo} from "../../../redux/actions/actionTodo";
import "./style.css";

function Items({task}) {
    const dispatch = useDispatch();
    const id = task.id;
    function check() {
        dispatch(checkTodo(id))
        dispatch(deleteTodo())
    }
    function checkedStyle() {
        if (task.checked){
            return "item_div, item_div_checked"
        } else {
            return "item_div"
        }
    }
    return(
        <div className={checkedStyle()}>
            <input className="itemCheckBox" onChange={() => check()} type="checkbox" defaultChecked={task.checked}/>
            <p className="itemText">{task.text}</p>
            <button className="itemDeleteButton" onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </div>
    );
}
export default Items;