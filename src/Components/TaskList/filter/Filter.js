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

function Filter(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <p>Left {props.left} tasks</p>
            </div>
            <div>
                <button onClick={() => dispatch(checkedAny())}>All</button>
                <button onClick={() => dispatch(checkedFalse())}>ToDo</button>
                <button onClick={() => dispatch(checkedTrue())}>Completed</button>
            </div>
            <div>
                <button onClick={() => dispatch(deleteChecked())}>Delete checked</button>
            </div>
        </div>
    );
}
export default Filter;