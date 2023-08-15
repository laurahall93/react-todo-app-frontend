import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "../App";
import { addTodo, updateTodoById } from "../todoClient";
import { useEffect } from "react";

interface FormProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  editTodo: TodoItem | null;
  setEditTodo: React.Dispatch<React.SetStateAction<TodoItem | null>>;
}

export function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}: FormProps): JSX.Element {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const updateTodo = (input: string, id: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { id: id, title: input, completed: false };
      } else {
        return todo;
      }
    });

    setTodos(newTodo);
    setEditTodo(null);

    const findTodo = newTodo.find((todo) => {
      return todo.id === id;
    });
    if (findTodo) {
      updateTodoById(parseInt(findTodo.id), findTodo.title, findTodo.completed);
    }
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
      addTodo(input);
    } else {
      updateTodo(input, editTodo.id);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter Your Task..."
        className="task-input"
        value={input}
        required
        onChange={handleInputChange}
      />
      <button className="form-button" type="submit">
        Add
      </button>
    </form>
  );
}
