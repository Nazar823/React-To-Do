function Filter(props) {
    return (
        <div>
            <div>
                <p>Left {props.left} tasks</p>
            </div>
            <div>
                <button>All</button>
                <button>ToDo</button>
                <button>Completed</button>
            </div>
            <div>
                <button>Delete checked</button>
            </div>
        </div>
    );
}
export default Filter;