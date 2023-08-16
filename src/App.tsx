import { Form } from "./components/Form";
import Header from "./components/Header";
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";
import { getTodos } from "./todoClient";
import "./styles.css";

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [editTodo, setEditTodo] = useState<TodoItem | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setTodos(await getTodos());
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="todo-list">
        <div>
          <div>
            <Header />
          </div>

          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div className="label">
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
