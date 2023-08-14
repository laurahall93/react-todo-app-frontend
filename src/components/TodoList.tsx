import { TodoItem } from "../App";
import "font-awesome/css/font-awesome.min.css";
import { updateTodoById, deleteById } from "../todoClient";

interface TodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoItem | null>>;
}

export function TodoList({
  todos,
  setTodos,
  setEditTodo,
}: TodoListProps): JSX.Element {
  const handleDeleteById = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    deleteById(parseInt(id));
  };

  const handleUpdateById = (id: string, task: string) => {
    const findTodo = todos.find((todo) => {
      return todo.id === id;
    });
    if (findTodo) {
      setEditTodo(findTodo);
    }
  };

  const listTodos = todos.map((todo) => (
    <div
      key={todo.id}
      className="single-todo"
      onChange={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <div>
          {todo.title.slice(0, 1).toLocaleUpperCase() + todo.title.slice(1)}
        </div>
      </div>
      <div className="btn-picto">
        <button className="button-complete ">
          <i className="fa fa-check-circle"></i>
        </button>
        <button
          className="button-edit "
          onClick={() => handleUpdateById(todo.id, todo.title)}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="button-delete "
          onClick={() => handleDeleteById(todo.id)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  ));

  return <div className="all-todos">{listTodos}</div>;
}
