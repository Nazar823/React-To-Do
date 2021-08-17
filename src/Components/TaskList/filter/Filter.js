import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    checkedTrue,
    checkedFalse,
    checkedAny
} from "../../../redux/actions/actionFilter";
import "./style.css"
import {deleteCheckedAPI} from "../../../API/TaskAPI/deleteCheckedAPI";
import {checkAllTasksAPI} from "../../../API/TaskAPI/checkAllTasksAPI";

let classDeleter
let buttonClass = ["filterBtsSelected", "filterBts", "filterBts"]

function Filter(props) {
    const dispatch = useDispatch()
    const {todos} = useSelector(state => state.todosReducer)
    const filter = useSelector(state => state.filterReducer)
    for (let i = 0; i < todos.length; i++){
        if (todos[i].checked) {
            classDeleter = "gray"
            break
        } else {
            classDeleter = "gray, deleterDisplayNo"
        }
    }
    return (
        <div className="filter">
            <button id="counter" className="filter, gray" onClick={() => {
                dispatch(checkAllTasksAPI()) }} >{props.left} tasks left</button>
            <div className="filterBtsDiv">
                <button className={buttonClass[0]} onClick={() => {
                    dispatch(checkedAny())
                    buttonClass = ["filterBtsSelected", "filterBts", "filterBts"]
                }}>All</button>
                <button className={buttonClass[1]} onClick={() => {
                    dispatch(checkedFalse())
                    buttonClass = ["filterBts", "filterBtsSelected", "filterBts"]
                }}>ToDo</button>
                <button className={buttonClass[2]} onClick={() => {
                    dispatch(checkedTrue())
                    buttonClass = ["filterBts", "filterBts", "filterBtsSelected"]
                }}>Completed</button>
            </div>
            <button id="deleter" className={classDeleter} onClick={() => dispatch(deleteCheckedAPI())}>Clear completed</button>
        </div>
    );
}
export default Filter;