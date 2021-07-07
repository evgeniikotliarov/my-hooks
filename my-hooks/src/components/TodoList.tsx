import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {setTodoPage} from "../store/action-creators/todo";

type TodoListProps = {
  todos: any[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = () => {
  const {loading, error, todos, limit, page} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useActions();
  const pages = [1,2,3,4,5];
  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if(todos.length === 0) {
    return (
      <p className={"center"}>To-do empty</p>
    )
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
      <div style={{display: "flex"}}>
        {pages.map((p: number, index) => <div key={index} onClick={() => setTodoPage(p)} style={{border: p === page ? "2px solid green" : "1px solid gray", padding: "10px"}}>{p}</div>)}
      </div>
    </div>
  )
}