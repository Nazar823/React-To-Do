import {useState} from "react";
import {useDispatch} from "react-redux";
import {
    checkedTrue,
    checkedFalse,
    checkedAny
} from "../../../redux/actions/actionFilter";
import {
    deleteChecked
} from "../../../redux/actions/actionTodo"
import "./style.css"

function Filter(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <p className="filter" >Left {props.left} tasks</p>
            </div>
            <div>
                <button className="filter" onClick={() => dispatch(checkedAny())}>All</button>
                <button className="filter" onClick={() => dispatch(checkedFalse())}>ToDo</button>
                <button className="filter" onClick={() => dispatch(checkedTrue())}>Completed</button>
            </div>
            <div>
                <button className="filter" onClick={() => dispatch(deleteChecked())}>Delete checked</button>
            </div>
        </div>
    );
}
export default Filter;