import React from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

type TodoListProps = {
  todos: any[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ onRemove, onToggle}) => {

  const {} = useActions()
  const {loading, error, todos} = useTypedSelector(state => state.todo)
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

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ["todo"];
        if(todo.completed) {
          classes.push("completed")
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
              <span>{todo.title}</span>
              <i className={"material-icons red-text"} onClick={event => removeHandler(event, todo.id)}>delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}