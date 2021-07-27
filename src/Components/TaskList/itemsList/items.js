import {useDispatch} from "react-redux";
import {checkTodo, deleteTodo, refreshTodo} from "../../../redux/actions/actionTodo";
import {useState} from "react";

function Items({task}) {
    const dispatch = useDispatch();
    const id = task.id;
    function check() {
        dispatch(checkTodo(id))
        dispatch(deleteTodo())
    }
    return(
        <div>
            <input onChange={() => check()} type="checkbox" defaultChecked={task.checked}/>
            <p>{task.text}</p>
            <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </div>
    );
}
export default Items;