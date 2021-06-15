import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {Itodo} from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Itodo>>([])

  const addHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if(todo.id === id) return {
          ...todo,
          completed: !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    setTodos(prevState => prevState.filter(fil => fil.id !== id))
  }

  return <>
    <Navbar/>
    <div className={"container"}>
      <TodoForm onAdd={addHandler}/>
      <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
    </div>
  </>
}

export default App;
