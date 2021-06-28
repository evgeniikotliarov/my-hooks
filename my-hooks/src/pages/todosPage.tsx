import React, {useEffect, useState} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {Itodo} from "../interfaces";
import axios from "axios";
import EventsExamples from "../components/EventsExamples";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Array<Itodo>>([])

  useEffect(() => {
    fetchTodos().then();
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

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
    const shoudRemove = confirm("Подтвердите удаление")
    if(shoudRemove) {
      setTodos(prevState => prevState.filter(fil => fil.id !== id))
    }
  }

  return (
    <React.Fragment>
      <EventsExamples/>
      <div className={"container"}>
        <TodoForm onAdd={addHandler}/>
        <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
      </div>
    </React.Fragment>
  )
}