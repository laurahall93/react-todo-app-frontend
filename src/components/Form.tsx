import { v4 as uuidv4 } from "uuid";

interface FormProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todos: any[];
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}

export function Form({
  input,
  setInput,
  todos,
  setTodos,
}: FormProps): JSX.Element {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
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
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
}
