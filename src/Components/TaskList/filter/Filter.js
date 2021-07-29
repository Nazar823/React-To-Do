import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    checkedTrue,
    checkedFalse,
    checkedAny
} from "../../../redux/actions/actionFilter";
import {
    deleteChecked,
    checkAll,
    updateTodo
} from "../../../redux/actions/actionTodo"
import "./style.css"

let classDeleter
let buttonClass = ["filterBtsSelected", "filterBts", "filterBts"]
console.log(buttonClass[0])

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
    return (
        <div className="filter">
            <button id="counter" className="filter, gray" onClick={() => {
                dispatch(checkAll())
                setTimeout(function () {
                    dispatch(checkedFalse())
                }, 50)
                setTimeout(function () {
                    dispatch(checkedAny())
                }, 50)
                if (buttonClass[2] === "filterBtsSelected")
                setTimeout(function () {
                    dispatch(checkedTrue())
                }, 50)
                if (buttonClass[1] === "filterBtsSelected")
                    setTimeout(function () {
                        dispatch(checkedFalse())
                    }, 50)
            }} >{props.left} tasks left</button>
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
            <button id="deleter" className={classDeleter} onClick={() => dispatch(deleteChecked())}>Clear completed</button>
        </div>
    );
}
export default Filter;