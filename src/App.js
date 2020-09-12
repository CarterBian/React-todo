import React, {useState} from 'react';
import Todos from './Todos';
import AddToDo from './AddToDo';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'buy some milk'},
    {id: 2, content: 'play mario kart'}
  ]);
  const deleteTodo = (id) =>{
    const todosfilter = todos.filter(todo =>{
      return todo.id !== id
    });
    setTodos(todosfilter);
  }
  const addTodo = (todo) =>{
    todo.id = Math.random();
    const todos1 = [...todos, todo];
    setTodos(todos1);
  }
  return (
    <div className="todo-app container">
      <h1 className="center blue-text text-accent-2"> Todo-List</h1>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
      <AddToDo addTodo={addTodo}/>
    </div>
  );
}

export default App;
