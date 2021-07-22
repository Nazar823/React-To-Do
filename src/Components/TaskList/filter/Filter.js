function Filter(props) {
    return (
        <div>
            <div>
                <p>Left {props.left} tasks</p>
            </div>
            <div>
                <button onClick={() => props.filter("Default")}>All</button>
                <button onClick={() => props.filter("ToDo")}>ToDo</button>
                <button onClick={() => props.filter("Completed")}>Completed</button>
            </div>
            <div>
                <button onClick={() => props.deleteChecked()}>Delete checked</button>
            </div>
        </div>
    );
}
export default Filter;