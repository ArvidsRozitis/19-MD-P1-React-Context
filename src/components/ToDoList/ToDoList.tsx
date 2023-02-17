import ToDoItem from "../ToDoItem/ToDoItem";

type TodoItem = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const ToDoList = () => {
  const toDoItemsX: TodoItem[] = [
    {
      id: 1,
      title: "Jāiztīra māja",
      content: "Nosākuma jāaiziet uz veikalu un jānopērk pāris lietas",
      date: "10/20/2030",
    },
    {
      id: 2,
      title: "Jāpavingro",
      content: "Jāiegādājas sporta apavi",
      date: "10/20/1090",
    },
    {
      id: 3,
      title: "Jāuztaisa vakariņas",
      content: "gaļa ir saldētavā",
      date: "13/12/2004",
    },
  ];

  return (
    <div>
      {toDoItemsX.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          content={todo.content}
          date={todo.date}
        />
      ))}
    </div>
  );
};

export { ToDoList };
export type { TodoItem };
