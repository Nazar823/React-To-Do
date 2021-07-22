function Items(props) {
    const id = props.task.id;
    return(
        <div>
            <input onChange={() => props.checkItem(id)} type="checkbox" checked={props.task.checked}/>
            <p>{props.task.text}</p>
            <button onClick={() => props.deleteItem(id)}>Delete</button>
        </div>
    );
}
export default Items;