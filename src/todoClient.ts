import { TodoItem } from "./App";

export const getTodos = async () => {
  const response = await fetch("http://localhost:4000/items");
  const jsonBody: TodoItem[] = await response.json();
  return jsonBody;
};

export const addTodo = async (task: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      title: task,
    }),
    redirect: "follow",
  };

  const response = await fetch("http://localhost:4000/items", requestOptions);
  return response;
};

export const deleteById = async (id: number) => {
  const requestOptions: RequestInit = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(
    "http://localhost:4000/items/" + id,
    requestOptions
  );
  return response;
};

export const updateTodoById = async (id: number, task: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions: RequestInit = {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify({
      title: task,
    }),
    redirect: "follow",
  };

  const response = await fetch(
    "http://localhost:4000/items/" + id,
    requestOptions
  );
  return response;
};
