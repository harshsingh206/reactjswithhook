import React, {useState} from 'react';
import './App.css'; 

function App(){
  const [todos, setTodos] = useState([
    {
      movie: 'ABCD1',
      isCompleted: false
    },
    {
      movie: 'ABCD2',
      isCompleted: false
    },
    {
      movie: 'ABCD3',
      isCompleted: false
    }
  ]);

  const addTodo = movie =>{
    const newTodos = [...todos, {movie}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);

  }


  return(
    <div className="app">
      <div className="todo-list">
         {todos.map((todo,index) => (
           <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}></Todo>
         ))}
         <TodoForm addTodo={addTodo}> </TodoForm>
      </div>
    </div>

  )
}

function Todo({todo, index, completeTodo}){
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through': ''}} className="todo">
      {todo.movie}
      <div>
      <button onClick={()=> completeTodo(index)}>Complete</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        placeholder="Add Movie"
        value={value} 
        onChange={e => setValue(e.target.value)}></input>
    </form>
  )
}

export default App;