import React, {useState} from 'react';
import Todos from './Todos';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'buy some milk'},
    {id: 2, content: 'play mario kart'}
  ]);
  const deleteTodo = (id) =>{
    const todosfilter = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(todosfilter);
  }
  return (
    <div className="todo-app container">
      <h1 className="center blue-text"> Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
