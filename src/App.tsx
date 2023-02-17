import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddToDoForm />
      <div>
        todo list
        <div>todo cards</div>
      </div>
    </div>
  );
}

export default App;

const AddToDoForm = () => {
  return (
    <div>
      add to do
      <form>
        <label>
          add new to do
          <input />
          <button>+</button>
        </label>
      </form>
    </div>
  );
};


