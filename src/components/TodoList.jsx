import TodoListItem from "./TodoListItem";
import { todos } from "../data/todos";

const TodoList = () => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
