import { Form } from "./components/Form";
import Header from "./components/Header";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import "./styles.css";

function App(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<any[]>([]);

  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>

          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
            />
          </div>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
