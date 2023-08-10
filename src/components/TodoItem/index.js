import "./index.css"

class TodoItem = props => {
    const {todoDetails,deleteTodo}= props
    const {id,title}=todoDetails

    onDelete=()=>{
        deleteTodo(id)
    }

    render(){
    return (
        <li className="to-do-card-container">
            <h1 className="todo-title">{title}</h1>
            <button type="button" className="btn" onClick={onDelete}>Delete</button>
        </li>
    )
    }

}

export default TodoItem
