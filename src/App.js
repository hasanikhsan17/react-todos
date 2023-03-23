import "./App.css";
import TodoRowItem from "./component/TodoRowItem";
import TodoTable from "./component/TodoTable";

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plans", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make a dinner", rowAssigned: "User One" },
  ];
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
