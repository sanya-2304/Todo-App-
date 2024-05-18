import React from "react";

const TodoItem=(props)=>{
    return(
        <li className="item">
            <span>
        {props.completed ? <></>: <input  type="checkbox"/>}
        <span className="todo-span">{props.title}</span ></span>
        <p>...</p>
        </li>
    )
}
export default TodoItem