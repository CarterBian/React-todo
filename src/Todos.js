import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div onClick={() => {deleteTodo(todo.id)}} className="collection-item truncate" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left, yay!</p>
    );
    return(
        <div className="todos collection z-depth-1">
            {todoList}
        </div>

    );
}
export default Todos;