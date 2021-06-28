import React, {useEffect, useState} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {Itodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Array<Itodo>>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || '[]') as Itodo[]
    setTodos(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

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
      <div className={"container"}>
        <TodoForm onAdd={addHandler}/>
        <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
      </div>
    </React.Fragment>
  )
}