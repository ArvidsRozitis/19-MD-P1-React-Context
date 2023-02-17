import "./App.css";
import AddToDoForm from "./components/AddToDoForm/AddToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  return (
    <div className="App">
      <AddToDoForm />
      <div>
        todo list
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
}

export default App;



