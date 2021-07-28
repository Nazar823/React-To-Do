import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    checkedTrue,
    checkedFalse,
    checkedAny
} from "../../../redux/actions/actionFilter";
import {
    checkTodo,
    deleteChecked, deleteTodo, updateTodo
} from "../../../redux/actions/actionTodo"
import "./style.css"

let classDeleter

function Filter(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.todosReducer)
    for (let i = 0; i < state.length; i++){
        if (state[i].checked) {
            classDeleter = "gray"
            break
        } else {
            classDeleter = "gray, deleterDisplayNo"
        }
    }

    function checkAll() {
        state.forEach(task => {
            if (!task.checked){
                dispatch(checkTodo(task.id))
            }
        })
        dispatch(updateTodo())
    }
    return (
        <div className="filter">
            <button id="counter" className="filter, gray" onClick={() => checkAll()} >{props.left} tasks left</button>
            <div className="filterBtsDiv">
                <button className="filterBts" onClick={() => dispatch(checkedAny())}>All</button>
                <button className="filterBts" onClick={() => dispatch(checkedFalse())}>ToDo</button>
                <button className="filterBts" onClick={() => dispatch(checkedTrue())}>Completed</button>
            </div>
            <button id="deleter" className={classDeleter} onClick={() => dispatch(deleteChecked())}>Clear completed</button>
        </div>
    );
}
export default Filter;