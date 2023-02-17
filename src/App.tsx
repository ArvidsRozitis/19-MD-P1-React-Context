import "./App.css";
import AddToDoForm from "./components/AddToDoForm/AddToDoForm";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <AddToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
