function Items({task}) {
    return(
        <div>
            <input type="checkbox" checked={task.checked}/>
            <p>{task.text}</p>
            <button>Delete</button>
        </div>
    );
}
export default Items;