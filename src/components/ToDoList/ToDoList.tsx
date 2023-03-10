import ToDoItem from "../ToDoItem/ToDoItem";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type TodoItemType = {
  _id: string;
  title: string;
  content: string;
  date: string;
  isDone: boolean;
};

const ToDoList = () => {
  const { data, isLoading } = useQuery<TodoItemType[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (!data) {
    return <h1>There is no tasks to show.</h1>;
  }

  return (
    <div>
      {data.map((todo) => (
        <ToDoItem
          key={Math.random()}
          _id={todo._id}
          title={todo.title}
          content={todo.content}
          date={todo.date}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
};

export { ToDoList };
export type { TodoItemType };

const getTasks = () => {
  return axios.get("http://localhost:3004/tasks").then((res) => res.data);
};
